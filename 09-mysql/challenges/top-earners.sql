SELECT
    department,
    name,
    salary,
    rank_in_dept
FROM (
    SELECT
        department,
        name,
        salary,
        DENSE_RANK() OVER (
            PARTITION BY department
            ORDER BY salary DESC
        ) AS rank_in_dept
    FROM employees
) ranked
WHERE rank_in_dept <= 3
ORDER BY department, rank_in_dept;
