DELIMITER $$
CREATE TRIGGER update_edit_time BEFORE UPDATE ON journey FOR EACH ROW
BEGIN
    IF new.edit_time <> old.edit_time THEN
        SET new.edit_time = CURRENT_TIMESTAMP;
    END IF;
END $$
DELIMITER ;