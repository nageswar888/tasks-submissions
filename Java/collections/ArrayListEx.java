package collections;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;
public class ArrayListEx {
	static void iterate(ArrayList<String> l)
	{
		if(l.size()==0)
			 System.out.println("The list is empty ");
		else{
		 Iterator<String> i1=l.iterator();
		 while(i1.hasNext())
		 {
			 System.out.println(i1.next());
		 }
		}
	}
	
	public static void main(String[] args) {
		ArrayList<String> l = new ArrayList<String>();
		Scanner in = new Scanner(System.in);
		int choice;
		boolean f = false;
		do
		{
			 System.out.println("Enter your choice");
			 System.out.println("1.Adding an element\n2.Remove an element\n3.List is empty or not");
			 System.out.println("4.Find size\n5.Get the element\n6.Display list\n7.Exit");
			 choice = in.nextInt();
			 
			 switch(choice)
			 {
			 case 1:
				 System.out.println("In which position do you want to add");
				 System.out.println("1.Add at the end\n2.At a specified index position");
				 int choice1 = in.nextInt();
				 switch(choice1)
				 {
				 case 1:
					 System.out.println("Enter the element to add");
					 String s1 = in.next();
					 l.add(s1);
					// iterate(l);
					 System.out.println("Element "+s1+" is added");
					 break;
				 case 2:
					 System.out.println("Enter the element to add");
					 String s2 = in.next();
					 System.out.println("Enter the Index position");
					 int index1 = in.nextInt();
					 if(index1>l.size())
						 System.out.println("Given index is not available in the list");
					 else{
						 l.add(index1,s2);
						 //iterate(l);
						 System.out.println("Element "+s2+" is added");
					 }
					 break;
				default :
					 System.out.println("Select only options 1 or 2 ");
					break;
				 }
				 break;
			 case 2:
				 if(l.size()<1)
					 System.out.println("The list is empty first add elements then remove");
				 else{
					 System.out.println("In which way you want to remove the element");
					 System.out.println("1.By the Index position\n2.By giving the Element");
					 int choice2 = in.nextInt();
					 switch(choice2)
					 {
					 case 1:
						 System.out.println("Enter the Index position");
						 int index2 = in.nextInt();
						 if(index2>l.size())
							 System.out.println("Given index position is not available");
						 else{
							 l.remove(index2);
							// iterate(l); 
							 System.out.println("The element at index position "+index2+" "+l.get(index2)+" was removed");
						 }
						 break;
					 case 2 :
						 System.out.println("Enter the element to remove");
						 String element = in.next();
						 int l1=l.indexOf(element);
						 if(l1==-1)
							 System.out.println("Element is not present in the list");
						 else{
							 l.remove(element);
							// iterate(l);
							 System.out.println("The element "+element+" was removed ");
						 }
					 
						 break;
				default:
					 System.out.println("Select only options 1or 2");
					break;
				 }
				 }
				 break;
			 case 3:
				 if(l.isEmpty()==true)
					 System.out.println("List is empty");
				 else
					 System.out.println("List is not empty");
				 break;
			 case 4:
				 System.out.println("The size of the list is :"+l.size());
				 break;
			 case 5:
				 System.out.println("Enter the index ");
				 int index5 = in.nextInt();
				 if(l.size()-1<index5)
					 System.out.println("The index is not present in the list");
				 else
				     System.out.println("The element is :"+l.get(index5));
				 break;
			 case 6:
				 iterate(l);
				 break;
			 case 7:
				 f= true;
				 break;
			default :
				 System.out.println("Select only above 7 options only");
				break;
			 }
			 	
		}while(!f);
		System.out.println("Exit");
		 in.close();
	}

}
