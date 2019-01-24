package exam;

import java.util.*;
abstract class Book
{
	String title;
	double price;
	Book(String title)
	{
		this.title= title;
	}
	String getTitle()
	{
		return this.title;
	}
	double getPrice()
	{
		return this.price;
	}
	abstract void setPrice();
	
	public String toString()
	{
		return "Title -"+this.title+" price "+this.price;
	}
	
}
class Fiction extends Book {
	void setPrice()
	{
		price = 24.99;
	}
	Fiction(String title)
	{
		super(title);
		setPrice();
	}
	
}

class NonFiction extends Book {
	void setPrice()
	{
		price = 37.99;
	}
	NonFiction(String title){
	 super(title);
	 setPrice();
	}
}
public class AbstractEx {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("enter the Fiction book");
		String s =  sc.next();
		Book f = new Fiction(s);
		System.out.println("enter the NonFiction book");
		String s1 =  sc.next();
		Book n = new NonFiction(s1);
		
		ArrayList<Book> al = new ArrayList<Book>();
		al.add(f);
		al.add(n);
		
		System.out.print(al);
		sc.close();
	}

}
