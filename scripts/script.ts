// --------------------------------------------------------------------------------------------------
class Animal {

    constructor(
        public name:string,
        public gender:string,
        public age:number,
        public size:string,
        public img:string,
        public vaccine:boolean,
        public arr?:Array<Animal>
        ){
            if (typeof arr !== 'undefined') {arr.push(this)};
        }

    public display() {
        return this.displayStart() + this.displayEnd();
    }
    private displayStart() {
        let vacBtnManipulate:string = ''
        if (this.vaccine) {
            vacBtnManipulate = `success">Vaccine <i class="fad fa-award`;
        } else {
            vacBtnManipulate = `danger">Vaccine <i class="fad fa-empty-set`;
        }
        return `
        <div class="card col-lg-3 col-md-5 col-sm-10 col-11 p-0 mx-4 mb-auto mt-3 border-0 card-shadow">
            <img src="${this.img}" class="card-img-top d-none d-sm-block img-task" alt="${this.name}">
            <h4 class="card-title py-1 my-0 bg-black text-light">${this.name}</h4>
            <div class="card-body text-start pb-0">
                <p>Gender : ${this.gender}<p>
                <p>Age : ${this.age}</p>
                <p>Size : ${this.size}</p>
            </div>
            <h3 class="text-center mx-1 p-2 text-light rounded-pill bg-${vacBtnManipulate}"></i></h3>`
    }
    protected displayEnd() {
        return `
            </div>
        </div>`
    }
}
// --------------------------------------------------------------------------------------------------

class Dog extends Animal {

    constructor(
                name:string,
                gender:string,
                age:number,
                size:string,
                img:string,
                vaccine:boolean,
        public  breed:string,
        public  training:boolean, 
                arr?:Array<Animal>
        ){
            super(name, gender, age, size, img, vaccine, arr);
        }

    protected displayEnd() {
        return `
            <div class="card-body text-start py-0">
            <p>Breed : ${this.breed}<p>
            <p>Training : ${this.training}</p>
        </div>`
    }  
}
// --------------------------------------------------------------------------------------------------

class Cat extends Animal {

    constructor(
                name:string,
                gender:string,
                age:number,
                size:string,
                img:string,
                vaccine:boolean,
        public  breed:string,
        public  furColor:string,
        public  breedInfo:string, 
                arr?:Array<Animal>
        ){
            super(name, gender, age, size, img, vaccine, arr);
        }

    protected displayEnd() {
        return `
            <div class="card-body text-start py-0">
            <p>Breed : ${this.breed}<p>
            <p>Fur color : ${this.furColor}</p>
            <p>Breed Info : <a href="#" class="card-link">${this.breedInfo}</a></p>
        </div>`
    }
}
// --------------------------------------------------------------------------------------------------

function sortByAge(direction:string) {
    const sortBtn = document.getElementById("sort") as HTMLElement;
    switch(direction) {
        case "down":
            sortBtn.outerHTML = `<a class="nav-link" href="javascript:sortByAge('up');" id="sort">Age<i class="ps-1 fad fa-sort-amount-up"></i></a>`;
            arrAnimals.sort((a, b) => a.age - b.age);
            break;
        default:
            sortBtn.outerHTML = `<a class="nav-link" href="javascript:sortByAge('down');" id="sort">Age<i class="ps-1 fad fa-sort-amount-down"></i></a>`;
            arrAnimals.sort((a, b) => b.age - a.age);
    }
    updateMainpage();
}
// --------------------------------------------------------------------------------------------------

function updateMainpage() {
    const output = document.getElementById("task-container") as HTMLElement;
    output.innerHTML = '';
    arrAnimals.forEach(animal => {
        output.innerHTML += animal.display();
    });
}

//============================= D A T A  a n d  S E T T I N G S ==================================
const arrAnimals = [] as Array<Animal>;

new Animal("Bacon", "female", 1, "small", "../images/Bacon.jpg", true, arrAnimals);
new Dog("Bellolino", "male", 5, "large", "../images/belloloino.webp", false, "mix", true, arrAnimals)
new Cat("Puschl", "female", 13, "xxlarge", "../images/Puschl.jpg", true, "Lion", "Blond", "www.lions.com", arrAnimals)
new Cat("Mietzi", "female", 7, "small", "../images/Mietzi.jpg", false, "American Shorthair", "Tabby", "www.sh-cats.com", arrAnimals)
new Animal("Ready", "male", 4, "small", "../images/Ready.jpg", false, arrAnimals);
new Dog("Gaff-gaff", "male", 3, "medium", "../images/Gaff-gaff.webp", true, "Shepper", true, arrAnimals)

//===============================================================================================

updateMainpage();