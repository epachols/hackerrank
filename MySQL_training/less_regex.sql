-- not so good with regexpats yet , so I like to stick with giving it an array. it unfortunately makes for wordy code at present, but I definitely recognize the value in becoming a regex wizard soon.

-- // Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.
SELECT DISTINCT CITY 
 FROM STATION 
  WHERE RIGHT(CITY,1) 
   NOT IN ('a','e','i','o','u');

-- Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.
SELECT DISTINCT CITY 
 FROM STATION 
  WHERE LEFT(CITY, 1) 
   NOT IN ('A', 'E', 'I', 'O', 'U') 
    OR RIGHT(CITY, 1) 
     NOT IN ('a', 'e', 'i', 'o', 'u');

-- query all the  NAMEs of STUDENTS who scored higher than 75 points, order by last 3 characters of their NAME, then ID ascending.

SELECT NAME FROM STUDENTS 
 WHERE Marks > 75 
  ORDER BY RIGHT(NAME,3) ASC,
  ID ASC;

-- Query all the Names of employees who make more than 2000 who have been there less than 1o months, order by ascending employee id.
SELECT name FROM (
 SELECT * FROM Employee 
 WHERE salary > 2000
) AS salaryList WHERE months < 10 ORDER BY employee_id ASC;


