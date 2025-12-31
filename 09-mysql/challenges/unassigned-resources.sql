SELECT
    e.id,
    e.name,
    e.department
FROM employees e
LEFT JOIN assignments a
    ON e.id = a.employee_id
WHERE a.employee_id IS NULL;
