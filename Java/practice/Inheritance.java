package oopconcepts;

 class Inherit {
	void method(){
		System.out.print("this is base class");
	}
}
public class Inheritance extends Inherit{
	void method(){
		System.out.print("this is child class");
	}
	public static void main(String args[]){
		Inherit i = new Inherit();
		// Inheritance i1 = i; // error found and it is : type mismatch: cannot convert from Inherit to Inheritance
		Inheritance i2 = (Inheritance)i;
		
		Inheritance j = new Inheritance();
		
		// Inheritance k = new Inherit(); // error found and it is : type mismatch: cannot convert from Inherit to Inheritance
		
		 Inherit l = new Inheritance();
	}

}
