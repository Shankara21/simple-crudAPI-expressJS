"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Books", [
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        categoryId: 2,
        publisher: "Bloomsbury",
        year: 1997,
        status: "Available",
        createdAt: new Date(),
        updatedAt: new Date(),
        description:
          "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
      },
      {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        categoryId: 2,
        publisher: "Bloomsbury",
        year: 1998,
        status: "Available",
        createdAt: new Date(),
        updatedAt: new Date(),
        description : "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the \"Chamber of Secrets\" has been opened and that the \"heir of Slytherin\" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",
      },
      {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        categoryId: 2,
        publisher: "Bloomsbury",
        year: 1999,
        status: "Available",
        createdAt: new Date(),
        updatedAt: new Date(),
        description : "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and the third novel in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along the way, he discovers a time-travel device and faces a dangerous criminal, Sirius Black, who escaped from Azkaban prison.",
      },
      {
        title: "Naruto Vol. 1",
        author: "Masashi Kishimoto",
        categoryId: 1,
        publisher: "Shueisha",
        year: 1999,
        status: "Available",
        createdAt: new Date(),
        updatedAt: new Date(),
        description : "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, an adolescent ninja who constantly searches for recognition and dreams to become the Hokage, the ninja in his village who is acknowledged as the leader and the strongest of all. The story is in two parts, the first set in Naruto's pre-teen years, and the second in his teens. The series is based on two one-shot manga by Kishimoto: Karakuri (1995) and Naruto (1997). The manga was adapted into an anime television series produced by Studio Pierrot and Aniplex, which aired 220 episodes. Naruto: Shippuden, a sequel to the original series, premiered in Japan on February 15, 2007, and ended on March 23, 2017, with 500 episodes. The series is directed by Hayato Date, and produced by Studio Pierrot and TV Tokyo. The series is based on Part II of the original manga series with exactly 500 episodes. The series is directed by Hayato Date, and produced by Studio Pierrot and TV Tokyo. The series is based on Part II of the original manga series with exactly 500 episodes.",
      },
      {
        title: "Dragon ball",
        author: "Akira Toriyama",
        categoryId: 1,
        publisher: "Shueisha",
        year: 1984,
        status: "Available",
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "Dragon Ball is a Japanese media franchise created by Akira Toriyama in 1984. The initial manga, written and illustrated by Toriyama, was serialized in Weekly Shōnen Jump from 1984 to 1995, with the 519 individual chapters collected into 42 tankōbon volumes by its publisher Shueisha. Dragon Ball follows the adventures of Son Goku during his boyhood years as he trains in martial arts and explores the world in search of the seven orbs known as the Dragon Balls, which can summon a wish-granting dragon when gathered. Along his journey, Goku makes several friends and battles a wide variety of villains, many of whom also seek the Dragon Balls. The Dragon Ball manga series was initially inspired by the classical Chinese novel Journey to the West, and incorporates numerous themes and elements from Chinese mythology and folklore. The series was adapted into an anime television series produced by Toei Animation, which ran for 153 episodes from 1986 to 1989. Dragon Ball was immensely popular in its native Japan, and it was later adapted into a variety of other media, including 20 animated feature films, four animated television series, numerous video games, trading card games, toys, and a Hollywood live-action film. The franchise has also been licensed for English-language release in various countries around the world, and it has become one of the best-selling manga and media franchises of all time.",
      },
      {
        title: "One Piece",
        author: "Eiichiro Oda",
        categoryId: 1,
        publisher: "Shueisha",
        year: 1997,
        status: "Available",
        createdAt: new Date(),
        updatedAt: new Date(),
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit odio commodi corrupti suscipit dolorem recusandae a aspernatur, nam necessitatibus ipsum deleniti eum esse debitis soluta libero maiores omnis iste eaque alias consectetur explicabo doloribus. Eius rem, labore error adipisci ipsum tempora animi placeat autem aut doloremque perspiciatis quaerat ad dolorem quasi sed odio distinctio ea praesentium, debitis ab. Sunt nobis dicta, error voluptatem debitis ad inventore eveniet laborum hic molestias culpa corporis rerum dolores placeat repellat nesciunt velit? Alias accusantium dolores enim numquam ab et, ex animi quod consequatur vero dignissimos officia consectetur aliquid aut modi commodi ullam ducimus?"
      },
      {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        categoryId: 1,
        publisher: "Allen & Unwin",
        year: 1954,
        status: "Available",
        createdAt: new Date(),
        updatedAt: new Date(),
        description : "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold.",
      },
      {
        title: "Forbes",
        author: "Forbes",
        categoryId: 3,
        publisher: "Forbes",
        year: 1999,
        status: "Available",
        createdAt: new Date(),
        updatedAt: new Date(),
        description : "Forbes is an American business magazine. Published bi-weekly, it features original articles on finance, industry, investing, and marketing topics. Forbes also reports on related subjects such as technology, communications, science, politics, and law. Its headquarters is located in Jersey City, New Jersey. Primary competitors in the national business magazine category include Fortune and Bloomberg Businessweek.",
      },
      {
        title: "The Economist",
        author: "The Economist",
        categoryId: 3,
        publisher: "The Economist",
        year: 1843,
        status: "Available",
        createdAt: new Date(),
        updatedAt: new Date(),
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut laboriosam libero vero pariatur perspiciatis, ducimus tenetur repudiandae veniam facere doloremque aliquam molestiae ea ipsa, beatae corrupti ullam nobis esse! Aperiam temporibus veritatis neque expedita autem vel recusandae voluptas aliquam totam, quidem hic dolores minus itaque? Aspernatur ratione sunt officiis quo libero similique sint hic eveniet. Officia reprehenderit consectetur voluptatum saepe! Pariatur nobis perferendis dolorem cumque qui enim sunt, vero vel doloribus doloremque iste deserunt natus voluptates in officia fugiat, nulla tempore a veritatis. Fugiat, nemo? Suscipit, enim fugit temporibus dolores officiis est, deserunt magni, molestias in neque velit vel."
      },
      {
        title: "The New York Times",
        author: "The New York Times",
        categoryId: 3,
        publisher: "The New York Times",
        year: 1851,
        status: "Available",
        createdAt: new Date(),
        updatedAt: new Date(),
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ea perspiciatis nam velit nihil saepe tempora corporis ex reprehenderit dolor sapiente modi laborum cum explicabo qui laboriosam veritatis, architecto doloribus amet soluta corrupti, neque vero itaque. Distinctio sed saepe deleniti delectus, voluptas, recusandae soluta officiis, nisi ea quidem non! Autem!"
      },
      {
        title: "Cerita Rakyat Indonesia",
        author: "Various",
        categoryId: 4,
        publisher: "Gramedia",
        year: 1999,
        status: "Available",
        createdAt: new Date(),
        updatedAt: new Date(),
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusantium laborum, dolore quae tenetur hic magnam eligendi! Earum labore tempora beatae modi error, quam quidem voluptate libero ab, in eaque! Velit, numquam optio fuga aspernatur odit fugit dolore perspiciatis a impedit eaque vitae doloremque doloribus nesciunt cum exercitationem minus blanditiis repellat animi. Nisi dicta autem tempora qui culpa cupiditate dignissimos ut quae soluta sit ratione, unde repudiandae expedita vero, tempore neque consectetur, nobis nesciunt rerum?"
      },
      {
        title: "Dongeng sebelum tidur",
        author: "Various",
        categoryId: 4,
        publisher: "Gramedia",
        year: 1999,
        status: "Available",
        createdAt: new Date(),
        updatedAt: new Date(),
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque ullam nesciunt asperiores voluptatibus ipsam cumque ea ut, consequuntur, explicabo hic facere illo minima aut laborum laudantium ipsum quisquam maxime expedita ratione ad nihil voluptas iste quam. Fuga, quibusdam? Eum dolorem dolores itaque iste et sit iusto, expedita assumenda repellendus nesciunt obcaecati necessitatibus adipisci voluptate hic praesentium? Voluptatibus optio, nesciunt maxime nam sapiente quidem vel natus iure facilis! Incidunt praesentium accusantium quasi repudiandae quo excepturi dolorem! Necessitatibus odio sint doloremque?"
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
