users
- id (PK, uuid/serial)
- login (varchar, unique, not null)
- email (varchar, unique, not null)
- password_hash (varchar, not null)   -- хэш, не пароль!
- role (enum: 'user' | 'admin', default 'user')
- created_at (timestamp, default now)
- updated_at (timestamp)

muscle_groups
- id (PK)
- name (varchar, unique, not null)   -- например "Грудь"
- description (text, nullable)

exercises
- id (PK)
- name (varchar, unique, not null)
- description (text)
- muscle_group_id (FK → muscle_groups.id)   -- связь с группой
- equipment (varchar)
- created_by (FK → users.id, nullable)
- created_at

workout_templates
- id (PK)
- name (varchar, not null)
- description (text)
- created_by (FK → users.id)    -- кто создал (обычно админ)
- is_public (boolean, default true)
- created_at

workout_template_exercises
- id (PK)
- template_id (FK → workout_templates.id)
- exercise_id (FK → exercises.id)
- sets (int)
- reps (int)
- rest_seconds (int)
- order_index (int) 

workouts
- id (PK)
- user_id (FK → users.id)
- template_id (FK → workout_templates.id, nullable)
- date (date, default current_date)
- duration (int)         -- длительность тренировки
- total_weight (decimal)         -- общий поднятый вес за тренировку
- notes (text)
- created_at

workout_exercises
- id (PK)
- workout_id (FK → workouts.id)
- exercise_id (FK → exercises.id)
- order_index (int)

workout_sets
- id (PK)
- workout_exercise_id (FK → workout_exercises.id)
- set_number (int)
- reps (int)
- weight (decimal)          -- кг/фунты
- duration_seconds (int)    -- для планки/кардио
- rpe (smallint)  

========= RPE =========
🔑 Основная шкала (от 1 до 10):
	•	1–4 → очень легко, можно бесконечно делать.
	•	5–6 → средняя нагрузка, можно ещё 4–5 повторов.
	•	7–8 → тяжело, но можно выжать 2–3 повтора.
	•	9 → почти максимум, остался бы 1 повтор.
	•	10 → абсолютный максимум, дальше уже отказ.

👉 В пауэрлифтинге и фитнесе RPE часто связывают с количеством повторов “в запасе” (RIR – Reps in Reserve). Например:
	•	RPE 8 = 2 повтора в запасе.
	•	RPE 9 = 1 повтор в запасе.
	•	RPE 10 = ни одного, полный отказ.