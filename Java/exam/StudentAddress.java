package exam;

import java.util.*;
class Studet
{
	int id,marks;
	String name,address;
	Studet(int id,String name,String address,int marks)
	{
		this.id = id;
		this.name = name;
		this.address = address;
		this.marks = marks;
	}
	public String toString()
	{
		return this.id+" "+this.name+" "+this.address+" "+this.marks;
		
	}
}
class Address
{
	int doorNo;
	String streetName,city;
}
class SortbyMarks implements Comparator<Studet>
{
	public int compare(Studet a,Studet b)
	{
		return a.marks-b.marks;
	}
}

public class StudentAddress {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		ArrayList<Studet> al = new ArrayList<Studet>();
		Studet s[] = new Studet[5];
		s[0] = new Studet(3,"ravi","hyd",90);
		s[1] = new Studet(4,"raju","hyd",95);
		s[2] = new Studet(5,"mahesh","hyd",99);
		s[3] = new Studet(1,"krishna","hyd",70);
		s[4] = new Studet(2,"ram","hyd",80);
		al.add(s[0]);
		al.add(s[1]);
		al.add(s[2]);
		al.add(s[3]);
		al.add(s[4]);
		Collections.sort(al, new SortbyMarks()); 
		
		///////*********** for display *******************//////
		System.out.println("The sorted list is :"+al);
		
		System.out.println("enter id for display");
		int id = sc.nextInt();
		 for(int i=0;i<s.length;i++)
		 {
			 if(id==s[i].id)
			 {
				 System.out.println(s[i]);
			 } 
		 }
		 //////////////// for deleting //////////////////
		 System.out.println("enter id for  deleting:" );
		 id=sc.nextInt();
		 for(int i=0;i<s.length;i++)
		 {
			 if(id==s[i].id)
			 {
				 al.remove(s[i]);
			 } 
		 }
		 System.out.println("after deleting the list is :" +al);
		 
		 //////////////////// for re naming ////////////////////
		 System.out.println("enter id for rename the name in the entry ");
		 id=sc.nextInt();
		  
		 for(int i=0;i<s.length;i++)
		 {
			 if(id==s[i].id)
			 {
				 s[i].name="rename";
			 } 
		 }
		 System.out.println("after rename by id :" +al);
		 sc.close();

		
	}

}
