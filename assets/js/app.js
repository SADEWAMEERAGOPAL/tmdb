let cl=console.log;

const movies = [
  {
    title: "Avengers: Endgame",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
    rating: 9.0,
    overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins...",
  },
  {
    title: "Inception",
    image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/12/Inception.jpg",
    rating: 8.8,
    overview: "A thief who steals corporate secrets through dream-sharing technology..."
  },
  {
    title: "The Dark Knight",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjIAayoGfsy7mzF0-pIw5DXmroTYQTb_AXg&s",
    rating: 9.0,
    overview: "Batman raises the stakes in his war on crime, facing the Joker..."
  },
  {
    title: "Interstellar",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    rating: 8.6,
    overview: "A team of explorers travel through a wormhole in space..."
  },
  {
    title: "iron man",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlG_b73nyc6U01IaVcuIXVqt4GuMe28IlZg&s",
    rating: 7.8,
    overview: "A seventeen-year-old aristocrat falls in love with a kind but poor artist..."
  },
  {
    title: "The Matrix",
    image: "https://i.guim.co.uk/img/media/b295f1c9d47d4e21463c51b568588f2dd055627a/0_49_2000_1200/master/2000.jpg?width=465&dpr=1&s=none&crop=none",
    rating: 8.7,
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality..."
  },
  {
    title: "fight club",
    image: "https://m.media-amazon.com/images/M/MV5BMjk3NTYyMzc4Nl5BMl5BanBnXkFtZTcwODU3ODMzMw@@._V1_.jpg",
    rating: 8.5,
    overview: "A former Roman General sets out to exact vengeance against the corrupt emperor..."
  },
  {
    title: "Jurassic Park",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
    rating: 3,
    overview: "During a preview tour, a theme park suffers a major power breakdown..."
  },
  {
    title: "Forrest Gump",
    image: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    rating: 8.8,
    overview: "The presidencies of Kennedy and Johnson, the events of Vietnam, and more through the perspective of Forrest..."
  },
  {
    title: "The Lion King",
  image: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
  rating: 5,
  overview: "The presidencies of Kennedy and Johnson, the events of Vietnam, and more through the perspective of Forrest..."}
  ];
 
 

 
 const movieCantainer=document.getElementById('movieCantainer')
  
  const setRating=(rating)=>{
	 if(rating>=7){
		 return 'badge-success';
	 }else if(rating>=5&&rating<7){
		 return 'badge-warning';
	 }else{
		 return 'badge-danger';
	 }
 };
 
 let result = "";
movies.forEach(movie => {
    result += ` 
    <div class="col-md-4 mb-4">
        <div class="card">
            <figure class="movieCard mb-0">
                <img src="${movie.image}" alt="${movie.title}">
                <figcaption>
                    <div class="titleInfo">
                        <div class="row">
                            <div class="col-10">
                                <h3>${movie.title}</h3>
                            </div>
                            <div class="col-2">
                                <h3><span class="badge ${setRating(movie.rating)}">${movie.rating}</span></h3>
                            </div>
                        </div>
                    </div>
                    <div class="overView">
                        <h5>${movie.title}</h5>
                        <p>${movie.overview}</p>
                    </div>
                </figcaption>
            </figure>
        </div>
    </div>`;
});

movieCantainer.innerHTML = result;
console.log(result); 
