CREATE FUNCTION GetProjectStatus(project_id INT)
RETURNS VARCHAR(20)
DETERMINISTIC
RETURN
(
    CASE
        -- Project not found
        WHEN NOT EXISTS (
            SELECT 1
            FROM projects
            WHERE id = project_id
        ) THEN 'Unknown'

        -- Not started yet
        WHEN CURDATE() < (
            SELECT start_date
            FROM projects
            WHERE id = project_id
        ) THEN 'Not Started'
        
        
          ----------------------------------------------------------------
        -- Case 1: Project does NOT exist in the projects table
        -- If no row matches the given project_id, return 'Unknown'
        ----------------------------------------------------------------

        -- In progress
        WHEN CURDATE() BETWEEN
            (SELECT start_date FROM projects WHERE id = project_id)
            AND
            (SELECT end_date FROM projects WHERE id = project_id)
        THEN 'In Progress'

        -- End date passed → overdue
        WHEN CURDATE() > (
            SELECT end_date
            FROM projects
            WHERE id = project_id
        ) THEN 'Overdue'

        ELSE 'Unknown'
    END
);


SHOW FUNCTION STATUS
WHERE Db = 'employeedb'
  AND Name = 'GetProjectStatus';


SELECT
    name,
    start_date,
    end_date,
    GetProjectStatus(id) AS status
FROM projects;


