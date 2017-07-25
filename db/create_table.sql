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
('Libra', 'http://ciera.northwestern.edu/news/JPG/venus2.gif', 'September 22 – October 23', 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=155296959', 'Libra is represented by a set of scales. It is the inspiration for modern interpretations of "Lady Justice". This sign represents balance and harmony.')
('Capricorn', 'http://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1440/AW_187527_OUTERPLANETS_Saturn_doegjg.png', 'December 21 – January 19', 'https://s-media-cache-ak0.pinimg.com/736x/16/5e/d1/165ed187e6eb00368dc7b62b9afbb2ea--cancer-constellation-capricorn-sign.jpg', 'Capricorn is said to represent the Sumerian primordial god of wisdom and waters, Enki. Enki has the head and upper body of a goat and lowerbody of a fish. The goat portion of his body represents ambition, intelligence, curiosity, and the ability to thrive. The fish portion represents passion, intuition, and connection with the soul.')
('Cancer', 'https://openclipart.org/image/800px/svg_to_png/121903/Full-Moon-Luc-Viatour-by-Merlin2525.png', 'June 20 – July 22', 'https://s-media-cache-ak0.pinimg.com/236x/fd/35/71/fd3571646333d788e28fd2073ac3480c--zodiac-star-signs-zodiac-signs-astrology.jpg', 'Cancer is most often represented as a crab who is based off of Karkinos, a giant crab who fought along side a Hydra in an attempt to defeat Heracles. Characteristics of Cancer include tenacious, emotional, indolent, domestic, intuitive, refined, and empathetic.')
('Aries', 'https://openclipart.org/image/2400px/svg_to_png/233960/Mars-3D-Globe.png', 'March 20 – April 19', 'https://img1.etsystatic.com/124/1/5773121/il_340x270.1061775727_mssz.jpg', 'Aries is depicted by a ram. It is associated with bravery, leadership, recklessness, independence.')
('Aquarius', 'http://space-facts.com/wp-content/uploads/uranus-transparent.png', 'January 19 – February 18', 'https://s-media-cache-ak0.pinimg.com/236x/44/7f/f2/447ff2c75760016f325f397b7188bc94--zodiac-cancer-aquarius-zodiac.jpg', 'Aquarius is represented by a water-bearer. He is the cupbearer of the gods.')
('Leo', 'https://userscontent2.emaze.com/images/d895780c-5437-40fe-b95e-4d597519d9a5/03fa97f5e3d4e7423016f6e944540b78.png', 'July 22 – August 22', 'https://s-media-cache-ak0.pinimg.com/736x/e5/fb/e5/e5fbe52ee673ffeef95313cec6d66a27--leo-constellation-tattoo-zodiac-constellations.jpg', 'Leo is represented by a Nemean lion, which is a lion with an impenetrable hide in Greek mythology.')
('Gemini', 'http://freepngimages.com/wp-content/uploads/2016/05/planet-mercury-transparent-background.png', 'May 20 – June 20', 'https://s-media-cache-ak0.pinimg.com/736x/f4/b6/31/f4b6313ac5d405bcaa4d3b263de98d16--gemini-constellation-gemini-girl.jpg', 'Gemini is depicted as twins who, in Greek mythology, were granted shared godhood after death. It is represented by a volatile attitude, but a strength from their versitility.')
