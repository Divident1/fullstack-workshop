CREATE TABLE IF NOT EXISTS salary_audit (
    audit_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id INT,
    old_salary DECIMAL(10,2),
    new_salary DECIMAL(10,2),
    change_percent DECIMAL(5,2),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DELIMITER $$

CREATE TRIGGER trg_salary_audit
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    -- Log only if salary value actually changes
    IF OLD.salary <> NEW.salary THEN
        INSERT INTO salary_audit (
            employee_id,
            old_salary,
            new_salary,
            change_percent
        )
        VALUES (
            OLD.id,
            OLD.salary,
            NEW.salary,
            ROUND(((NEW.salary - OLD.salary) / OLD.salary) * 100, 2)
        );
    END IF;
END $$

DELIMITER ;


-- Check before update
SELECT id, name, salary
FROM employees
WHERE name = 'Gotam Singh';



-- view salary audit.
SELECT * FROM salary_audit;

