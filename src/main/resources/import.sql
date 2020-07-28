INSERT INTO building
  (name)
VALUES
  ('Palm Atlantis'),
  ('Dubai Frame'),
  ('Burj Khalifa'),
  ('Dubai Opera');

INSERT INTO person
  (name)
VALUES
  ('John'),
  ('Doe'),
  ('Jack');

INSERT INTO activity
  (activity_text)
VALUES
('Some Activity'),
('New Activity '),
('Extra Activity');

UPDATE activity SET
  person_Id = (SELECT id FROM person WHERE name = 'John'),
  building_Id = (SELECT id FROM building WHERE name = 'Dubai Frame')
WHERE activity_text = 'Some Activity';