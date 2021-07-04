class course {
  constructor(
    id,
    categoryIds,
    title,
    price,
    complexity,
    imageUrl,
    rating,
    Coursera,
    Udemy,
    Edx,
    Udacity,
    Edureka,
    FutureLearn,
    Business,
    DataScience,
    Design,
    Finance
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.price = price;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.rating = rating;
    this.Coursera = Coursera;
    this.Udemy = Udemy;
    this.Edx = Edx;
    this.Udacity = Udacity;
    this.Edureka = Edureka;
    this.FutureLearn = FutureLearn;
    this.Business = Business;
    this.DataScience = DataScience;
    this.Design = Design;
    this.Finance = Finance;
  }
}

export default course;
