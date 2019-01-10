package oopconcepts;

class One{
	
	One(){ // this is called two times one when its object is initialized and second when class three object initialized 
		System.out.println("parent class constructor");
	}
		int x=30;
		void display(){
			System.out.println("parent class");
		}
		void get(){
			System.out.println("get method in parent class");
		}
	
}
class Two extends One{

		 int x=50;
		 void display(){
				System.out.println("child class "+ super.x);
				super.get();  //parent get method called
				super.display(); //parent display method called
		 }
	
}
class Three extends One{
	Three(){
		super(); // parent constructor called
	}
}
public class SuperKey {
	public static void main(String args[]){
		
		Two t = new Two();
		t.display();
		
		Three t3 = new Three();	
		
	}

}
