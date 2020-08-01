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
  ('John Doe'),
  ('Taylor M'),
  ('Kelly Stark');

INSERT INTO activity
  (activity_text)
VALUES
('fixing defects'),
('cleaning the facade'),
('renewing the fire extinguishers'),
('electrical repairs');

UPDATE activity SET
  person_Id = (SELECT id FROM person WHERE name = 'John Doe'),
  building_Id = (SELECT id FROM building WHERE name = 'Dubai Frame')
WHERE activity_text = 'renewing the fire extinguishers';

UPDATE activity SET
  person_Id = (SELECT id FROM person WHERE name = 'Taylor M')
WHERE activity_text = 'cleaning the facade';

UPDATE activity SET
  building_Id = (SELECT id FROM building WHERE name = 'Dubai Frame')
WHERE activity_text = 'electrical repairs';