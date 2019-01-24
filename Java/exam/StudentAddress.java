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
		
		al.add(new Studet(3,"ravi","hyd",90));
		al.add(new Studet(4,"raju","hyd",95));
		al.add(new Studet(5,"mahesh","hyd",99));
		al.add(new Studet(1,"krishna","hyd",70));
		al.add(new Studet(2,"ram","hyd",80));
		Collections.sort(al, new SortbyMarks()); 
	
		System.out.println(al);
		
		al.remove(3);
		System.out.println(al);
	}

}
