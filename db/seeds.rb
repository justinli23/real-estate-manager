require 'faker'

puts "Clearing database..."
AgentProperty.destroy_all
Agent.destroy_all
Client.destroy_all
Property.destroy_all

puts "Seeding Agents..."
20.times { Agent.create(
    name: Faker::FunnyName.name_with_initial
)}

puts "Seeding Clients..."
20.times { Client.create(
    name_1: Faker::FunnyName.two_word_name, 
    name_2: Faker::FunnyName.two_word_name,
    agent_id: Agent.all.sample.id
)}

puts "Seeding Properties..."
20.times { Property.create(
    address: Faker::Address.full_address, 
    rooms: rand(1..5).to_s + " Bed, " + rand(1..5).to_s + " Bath",
    sq_ft: rand(1..10) * 500,
    price: rand(5..30) * 25000,
    description: "What a lovely property!"
)}

puts "Seeding AgentProperties..."
20.times { AgentProperty.create(
    agent_id: Agent.all.sample.id, 
    property_id: Property.all.sample.id)
}

puts "Seeding complete!"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# Examples:
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)