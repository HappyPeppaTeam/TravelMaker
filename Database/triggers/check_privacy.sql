DELIMITER $$
CREATE TRIGGER check_privacy BEFORE INSERT ON Journey FOR EACH ROW
BEGIN
	IF new.privacy NOT IN (0, 1) THEN
    	SIGNAL SQLSTATE '60000' SET MESSAGE_TEXT = 'invalid privacy argument, privacy field only accept [0, 1]';
    END IF;
END $$
DELIMITER ;