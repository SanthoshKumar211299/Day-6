//1)Write a class person to hold all details
/*class person{
    constructor(name,age,Gender,martialStatus,contact,email){
       this.name=name;
       this.age=age;
       this.Gender=Gender;
       this.martialStatus=martialStatus;
       this.contact=contact;
       this.email=email;
    }
}
const obj= new person("Santhosh",25,"Male","Unmarried",1234567890,"asdf@gmail.com");
console.log(obj.name,obj.age,obj.Gender,obj.martialStatus,obj.contact,obj.email);
*/
//Example:
/*
class car{
    constructor(brand,color,model,type,price,section){
        this.brand=brand;
        this.color=color;
        this.model=model;
        this.type=type;
        this.price=price;
        this.section=section;
    }
}
const obj1=new car("Hyundai","white","creta","Fuel Type","13.5lakhs","SUV")
console.log(obj1.brand,obj1.color,obj1.model,obj1.type,obj1.price,obj1.section)
*/
//2 a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, 
// and a String representing the rating as its arguments, and sets the respective class properties to these values.
/*
class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const obj1=new Movie("12th Fail","Zee Studios","9.3")
const obj2= new Movie("Master","Red Giant","7");
console.log(obj1.title,obj1.studio,obj1.rating)
console.log(obj2.title,obj2.studio,obj2.rating)
*/
// 2b) The constructor for the class Movie will set the class property rating to "PG" as default 
//when no rating is provided.
/*
class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const obj3=new Movie("Matran","Eros international");
console.log(obj3.title,obj3.studio,obj3.rating)
*/
//2 c)Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".
// You may assume the input array is full of Movie instances. The returned array need not be full.
/*
class Movie {
    constructor(title, studio,rating) {
        this.title = title;
        this.studio=studio;
        this.rating = rating;
    }
}

function getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
}

const movies = [
    new Movie("Movie 1", "movie production1","PG"),
    new Movie("Movie 2", "movie production2","R"),
    new Movie("Movie 3", "movie production3","PG"),
    new Movie("Movie 4","movie production4" ,"G")
];

const pgMovies = getPG(movies);
console.log(pgMovies);  
*/
//4d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”
/*
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const obj4=new Movie("Casino Royale","Eon Productions","PG13")
console.log(obj4.title,obj4.studio,obj4.rating)
*/
//3)Convert the UML diagram to Typescript class. - use number for double
/*
class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get Radius(){
        return this.radius;

    }
    set Radius(n){
        this.radius=n;

    }
    get Color(){
        return this.color;
    }
    set Color(m){
        this.color=m
    }
    get toString(){
        return `"circle[radius=${this.radius},color=${this.color}]" `

    }
    get area(){
        return Math.PI*Math.pow(this.radius,2);
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let obj=new circle(1.0,"red");
console.log(obj.radius);
console.log(obj.color);
console.log(obj.toString);
console.log(obj.area);
console.log(obj.circumference);
*/
//4) write a class to calcualte the uberprice
/*
class uberPrice{
    constructor(kilometer,price){
        this.kilometer=kilometer;
        this.price=price;
    }
    get Kilometer(){
        return this.kilometer;
    }
    
    get Price(){
        return this.price;
    }
    
    get totalPrice(){
        return this.Kilometer*this.Price;
    }
}
let obj1=new uberPrice(6,60)
console.log(obj1.Kilometer);
console.log(obj1.Price);
console.log(obj1.totalPrice);
*/
