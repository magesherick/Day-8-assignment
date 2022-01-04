//write a class to calculate uber price.

class Customer {
    constructor(Name,MobileNumber,Email,Pickuplocation,Droplocation){
       this.Name = Name;
       this.MobileNumber = MobileNumber;
       this.Email = Email;
       this.Pickuplocation = Pickuplocation;
       this.Droplocation = Droplocation;
       this.CostperKM = 10;
       this.Baseprice = 50;
    }
        Payment(kmtravelled) {
            
           if(kmtravelled <= 5){
            return ("Total cost = 50.00");
            
          } else{
                
            this.Total = this.Baseprice + (this.CostperKM * (kmtravelled - 5));
            return "total cost = ₹" + this.Total;
           }
        } }
const Magesh = new Customer("Magesh",1234567899,"M@gmail.com","Thiruvanmiyur","Karapakkam");
console.log(Deepak);
console.log(Deepak.Payment(10));