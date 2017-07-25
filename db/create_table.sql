DROP TABLE IF EXISTS signs CASCADE;


CREATE TABLE IF NOT EXISTS signs(
    id SERIAL PRIMARY KEY,
    name TEXT,
    planet TEXT,
    birthday TEXT,
    constellation TEXT,
    history TEXT
)

INSERT INTO signs
(name, planet, birthday, constellation, history)
VALUES
('Virgo', 'https://userscontent2.emaze.com/images/de1f3140-6f4e-4a67-9626-14c39a8f93a2/ecdcf3f9-8b51-47fa-993d-744d7f65b63a.png', 'August 23 - September 22', 'https://s-media-cache-ak0.pinimg.com/originals/a9/3a/97/a93a971728e935d18c230954c97335fd.jpg', 'Virgo is Latin for virgin. It lies between Leo to the west and Libra to the east, it is the second largest constellation in the sky. It can be found easily through its brightest star, Spica. This sign is usually depicted as a woman holding an ear of grain. It is normally associated with the tension between fetility and beauty.')
('Taurus', 'http://ciera.northwestern.edu/news/JPG/venus2.gif', 'April 21 - May 21', 'https://img0.etsystatic.com/112/1/5773121/il_340x270.1015254902_nz8p.jpg', 'The Taurus symbol of the bull is based on the "Creatan Bull", a white bull that fathered the Minotaur who was killed by the Greek figure, Theseus. It usually represents a strong-willed individual with great determination.')
('Scorpio', 'https://vignette2.wikia.nocookie.net/factfinder/images/c/c5/Mars-1-.png/revision/latest?cb=20130916161813', 'October 23 – November 21', 'https://img0.etsystatic.com/106/1/5773121/il_340x270.1015254410_4lzt.jpg', 'The Scorpio symbol is based on the giant Greek scorpion "Scorpius" who was sent to kill Orion. It usually represents a person who is ruled by their desires but shows great resourcefulness.')
('Sagittarius', 'http://freepngimages.com/wp-content/uploads/2016/04/planet-jupiter-1.png', 'November 21 – December 21', 'https://img0.etsystatic.com/134/0/10727906/il_340x270.999263426_9zkd.jpg', 'Sagittarius, or the archer, is based on the half-man half-horse Chiron from Greek mythology. Chiron mentored Achilles, hero of the Trojan War.')
('Pisces', 'http://www.freelogovectors.net/wp-content/uploads/2013/02/the_ice_planet.png', 'February 18 – March 20', 'https://s-media-cache-ak0.pinimg.com/736x/ba/ef/a1/baefa110d8fdac4b899df63fbdd137e9--pisces-zodiac-zodiac-signs.jpg', 'Pisces is Latin for "fishes". It appears as far back as 2300 BC on ancient Egyptian coffins. It is often represented as two fish swimming in opposite directions, which shows the duality of Pisces nature.')
