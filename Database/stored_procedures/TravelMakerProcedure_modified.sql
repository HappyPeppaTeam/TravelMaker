DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetBoardData`(IN `area_param` VARCHAR(255))
SELECT Discussion_board_area, 
       board_text.board_text_id, 
       board_text.Text_title, 
       board_text.Text,
       board_text.Posting_time,
       users.full_name,
       users.user_name,
       board_image.image_path
FROM board_text
JOIN users ON board_text.Posting_user_id = users.user_id
JOIN (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY board_text_id ORDER BY board_image_id) as rn
    FROM board_image
) board_image ON board_text.board_text_id = board_image.board_text_id
WHERE Discussion_board_area = area_param  AND board_image.rn = 1$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_journey_duration`(IN `search_id` INT)
BEGIN
    SELECT MIN(Journey_event.start_time) as journey_start, MAX(Journey_event.end_time) as journey_end 
    FROM Journey_event 
    WHERE Journey_event.journey_id = search_id;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_journey_id`(name varchar(100))
BEGIN
	SELECT journey_id
    FROM Journey
    WHERE journey_name = name;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `login_user`(IN `p_username` VARCHAR(255))
BEGIN
	DECLARE result varchar(255) DEFAULT NULL;
    -- 初始化 result 為 NULL，表示登入失敗
    -- 查詢資料庫中是否有匹配的使用者
    SELECT password INTO result FROM users WHERE user_name = p_username;
    select result as password;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `post_message`(
    p_board_text_id INT(21),
    p_message_text VARCHAR(101),
    p_user_id INT(21),
    p_message_time DATETIME
)
BEGIN
    INSERT INTO message_board(board_text_id, message_text, user_id, message_time)
    VALUES (p_board_text_id, p_message_text, p_user_id, p_message_time);
    
    SELECT COUNT(*) as result FROM message_board
    WHERE board_text_id = p_board_text_id
    AND message_text = p_message_text
    AND user_id = p_user_id
    AND message_time = p_message_time;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `register_user`(IN `p_username` VARCHAR(50), IN `p_password` VARCHAR(255), IN `p_email` VARCHAR(100), IN `p_birthdate` DATE, IN `p_fullname` VARCHAR(100), IN `p_nickname` VARCHAR(50), IN `p_gender` VARCHAR(10), IN `p_register_time` DATETIME)
BEGIN
    
    INSERT INTO users (user_name, password, email, birthday, full_Name, nick_name, gender,register_time)
    VALUES (p_username, p_password, p_email, p_birthdate, p_fullname, p_nickname, p_gender,p_register_time);
    SELECT 'Registration successful.' AS message;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `set_token`(IN `p_username` VARCHAR(255))
BEGIN
    DECLARE login_token varchar(40);
    SET login_token = UUID();
    UPDATE users SET token = login_token WHERE user_name = p_username;
    SELECT login_token as token;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `unSet_token`(token_from_logout varchar(255))
BEGIN
  DECLARE unset_result int DEFAULT 0;

  UPDATE users SET token = null WHERE token = token_from_logout;
  SELECT token INTO unset_result FROM users WHERE token = token_from_logout;
  SELECT unset_result;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAlbumsAndPhotos`(IN `userToken` VARCHAR(255))
BEGIN
    SELECT
        a.album_id,
        a.album_name,
        a.tag,
        a.description,
        p.image_id,
        p.image_name,
        p.image_url
    FROM
        users as u
    JOIN albums as a ON u.user_id = a.user_id
    JOIN album_photos as p ON a.album_id = p.album_id
    WHERE
        u.token = userToken;
END$$
DELIMITER ;