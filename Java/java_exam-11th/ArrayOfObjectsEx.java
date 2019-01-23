package oopconcepts;

import java.util.*;
class Animal
{
	String name,type,sound;
	Animal(String name,String type,String sound)
	{
		this.name = name;
		this.type = type;
		this.sound = sound;
	}
	
	public String toString()
	{
		return "Name is :"+this.name+" Type is :"+this.type+" Sound is :"+this.sound;
	}
}
public class ArrayOfObjectsEx {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		Animal a[] = new Animal[3];
		a[0]= new Animal("Dog","animal","bark");
		a[1]= new Animal("Cat","animal","Miaoww");
		a[2]= new Animal("Crow","bird","ka ka");
		
		boolean f= false;
		
		do{
			try{
			System.out.println("enter your choice");
			System.out.println("1.Display the list\n2.Display values at the index position\n3.Rename\n4.Delete\n5.Exit");
			int choice = in.nextInt();
		switch(choice) 
		{
		case 1:
			System.out.println("The list is :");
			for(int i=0;i<3;i++)
			{
				System.out.println(a[i]);
			}
			break;
		case 2:
			System.out.println("Enter the index position for display :");
			int index = in.nextInt();
			System.out.println(a[index]);
			break;
		case 3:
			System.out.println("Enter the index position for re-name :");
			int index1 = in.nextInt();
			System.out.println("enter the name :");
			String s = in.next();
			a[index1].name = s;
			break;
		case 4:
			System.out.println("Enter the index position for deleting the object :");
			int index2 = in.nextInt();
			a[index2]=null;
			break;
		case 5:
			f=true;
			break;
		default :
			System.out.println("your choice is in between 1 to 5");
			break;
		}
		}
		catch(Exception e)
		{
			System.out.println("index should be less than 3");
		}
		}while(!f);
		
		
		
		in.close();
	}

}
