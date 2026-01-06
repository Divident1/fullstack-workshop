DELIMITER $$

CREATE TRIGGER trg_validate_assignment
BEFORE INSERT ON assignments
FOR EACH ROW
BEGIN
    DECLARE project_count INT;
    DECLARE total_hours INT;

    ----------------------------------------------------------------
    -- Rule 1: An employee cannot be assigned to more than 3 projects
    ----------------------------------------------------------------
    SELECT COUNT(*)
    INTO project_count
    FROM assignments
    WHERE employee_id = NEW.employee_id;

    IF project_count >= 3 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Employee cannot be assigned to more than 3 projects';
    END IF;

    ----------------------------------------------------------------
    -- Rule 2: Total allocated hours must not exceed 2080
    ----------------------------------------------------------------
    SELECT IFNULL(SUM(hours_allocated), 0)
    INTO total_hours
    FROM assignments
    WHERE employee_id = NEW.employee_id;

    IF total_hours + NEW.hours_allocated > 2080 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Total allocated hours exceed 2080 limit';
    END IF;

END $$

DELIMITER ;


INSERT INTO assignments (employee_id, project_id, role, hours_allocated)
VALUES (1, 2, 'Developer', 200);


SELECT
    employee_id,
    COUNT(*) AS project_count,
    SUM(hours_allocated) AS total_hours
FROM assignments
GROUP BY employee_id;

