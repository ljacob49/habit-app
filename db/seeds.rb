# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Test1", email: "test@test.com", password: "test1")
User.create(username: "Test1", email: "test2@test.com", password: "test2")
User.create(username: "Test1", email: "bob@test.com", password: "test3")
User.create(username: "Test1", email: "mary@test.com", password: "test4")
User.create(username: "Test1", email: "tom@test.com", password: "test5")

Category.create(name: "Fitness")
Category.create(name: "Finance")
Category.create(name: "Health")
Category.create(name: "Mental Health")

Habit.create(name: "Drink more water", category_id: 3)
Habit.create(name: "Cardio", category_id: 1)
Habit.create(name: "Meditate", category_id: 4)
Habit.create(name: "Stick to Budget", category_id: 2)

Goal.create(description: "I want to stay on budget", user_id: 1, habit_id: 4)
Goal.create(description: "I want to stay on budget", user_id: 2, habit_id: 4)
Goal.create(description: "I want to stay on budget", user_id: 3, habit_id: 4)
Goal.create(description: "I want to stay on budget", user_id: 4, habit_id: 4)
Goal.create(description: "I want to stay on budget", user_id: 5, habit_id: 4)
