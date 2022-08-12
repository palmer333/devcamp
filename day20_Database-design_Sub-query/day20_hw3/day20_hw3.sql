

1. นักเรียนแต่ละคน ซื้อคอร์สไปคนละเท่าไร และจำนวนกี่คอร์ส

SELECT student_id, students.name, SUM(price), COUNT(*) as coureses
FROM (
    
select * from enrolls
INNER JOIN courses ON enrolls.course_id = courses.id
) as new_table

INNER JOIN students ON students.id = new_table.student_id
GROUP BY new_table.student_id;




2. นักเรียนแต่ละคน ซื้อคอร์สไหน ราคาแพงสุด

SELECT student_id, students.name, MAX(price)
FROM (
    
select * from enrolls
INNER JOIN courses ON enrolls.course_id = courses.id
) as new_table

INNER JOIN students ON students.id = new_table.student_id
GROUP BY new_table.student_id


3. นักเรียนแต่ละคนซื้อคอร์สราคาเฉลี่ยคนละเท่าไหร่

SELECT student_id, students.name, AVG(price)
FROM (
  
select * from enrolls
INNER JOIN courses ON enrolls.course_id = courses.id
) as new_table

INNER JOIN students ON students.id = new_table.student_id
GROUP BY new_table.student_id


