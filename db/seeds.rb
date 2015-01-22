# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.destroy_all
Author.destroy_all
Tag.destroy_all

#Author data
names = ["MonkeyButt", "BillyBob", "GlamourT", "Wonder", "FunSauce", "LomanFoLife", "Parody12"]
img_url = ["http://www.curiousblend.com/monkey.jpg","http://www.kboing.com.br/fotos/imagens/4f79f2197dc84.jpg","http://lecitykitty.com/wp-content/uploads/2014/05/audrey-2.jpg"]
bio = ["I like big butts...", "Howdy, Y'all", "Everything has Beauty."]
location = ["Nashville, TN", "New York, NY", "Los Angeles, CA"]
tag_id = [1,2,3]

#MicroPost data
post_url = ["https://s-media-cache-ak0.pinimg.com/736x/79/98/b2/7998b2fb3df0920e55b8b02c6e1c0f6d.jpg","https://s-media-cache-ak0.pinimg.com/236x/b7/3f/80/b73f806301204a9d2f40c7b17b2fa599.jpg","https://s-media-cache-ak0.pinimg.com/236x/9f/6d/dc/9f6ddc77d790fbed6d95899f59191824.jpg"]
title = ["Pin-Up", "Old Penn Station", "Castle!"]
words = ["Elvgrin", "Photograph", "Neuschwanstein"]

#Tag data
tag_name = ["women","architecture","beauty","art","sexy","fun","sports","science","movies", "landscape", "illustration"]

i = 0



names.each do |name|
	newAuthor = Author.create({
		username: name,
		img_url: img_url.sample(),
		bio: bio.sample(),
		location: location.sample(),
		password: 'happy',
		password_confirmation: 'happy'
	});

	10.times do
		post = Post.create({
			img_url: post_url.sample(),
			title: title.sample(),
			content: words.sample(),
			author_id: newAuthor.id
		});

		3.times do
			tag = Tag.create!(name: tag_name.sample())
			post.tags << tag
		end

		
	end
end