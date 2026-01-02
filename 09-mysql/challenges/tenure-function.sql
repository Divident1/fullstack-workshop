CREATE FUNCTION GetTenureCategory(hire_date DATE)
RETURNS VARCHAR(20)
DETERMINISTIC
RETURN
    CASE
        WHEN TIMESTAMPDIFF(YEAR, hire_date, CURDATE()) > 5 THEN 'Veteran'
        WHEN TIMESTAMPDIFF(YEAR, hire_date, CURDATE()) BETWEEN 2 AND 5 THEN 'Experienced'
        ELSE 'New Hire'
    END;

SHOW FUNCTION STATUS
WHERE Db = 'employeedb'
  AND Name = 'GetTenureCategory';


SELECT
    name,
    hire_date,
    GetTenureCategory(hire_date) AS tenure_category
FROM employees;
