DELIMITER $$
CREATE PROCEDURE get_journey_duration(search_id int)
BEGIN
    SELECT MIN(Journey_event.start_time) as journey_start, MAX(Journey_event.end_time) as journey_end 
    FROM Journey_event 
    WHERE Journey_event.journey_id = search_id;
END $$
DELIMITER ;