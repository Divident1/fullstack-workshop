DELIMITER $$

CREATE PROCEDURE AdjustDepartmentSalary(
    IN dept VARCHAR(50),
    IN percent DECIMAL(5,2),
    OUT affected_count INT
)
BEGIN
    -- Safety check: do nothing if percentage is negative
    IF percent < 0 THEN
        SET affected_count = 0;
    ELSE
        UPDATE employees
        SET salary = salary + (salary * percent / 100)
        WHERE department = dept;

        -- Number of rows affected
        SET affected_count = ROW_COUNT();
    END IF;
END $$

DELIMITER ;

SHOW PROCEDURE STATUS
WHERE Db = 'employeedb'
  AND Name = 'AdjustDepartmentSalary';

CALL AdjustDepartmentSalary('Engineering', 10, @affected);


