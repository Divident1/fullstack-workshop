SELECT
    CONCAT(
        UPPER(SUBSTRING(name, LOCATE(' ', name) + 1)),
        ', ',
        SUBSTRING(name, 1, LOCATE(' ', name) - 1)
    ) AS formatted_name,

    CONCAT(
        LOWER(SUBSTRING(name, 1, LOCATE(' ', name) - 1)),
        '.',
        LOWER(SUBSTRING(name, LOCATE(' ', name) + 1)),
        '@company.com'
    ) AS email,

    CONCAT(
        UPPER(LEFT(name, 1)),
        UPPER(LEFT(SUBSTRING(name, LOCATE(' ', name) + 1), 1))
    ) AS initials
FROM employees;
