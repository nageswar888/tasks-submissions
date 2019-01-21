package oopconcepts;

public class CountingVowels {
	public static void main(String[] args) {
		String s1= "Mississippi";
		char b[]= {'a','e','i','o','u'};
		char a[] = s1.toCharArray();
		int count=0,l=0;
		char c[]= new char[11];
		for(int i=0;i<a.length;i++)
		{
			
			for(int j=0;j<b.length;j++)
			{
				
				if(a[i]==b[j]){
					count++;
					a[i]='$';
					break;
				}	
			}
			if(a[i]!='$'){
				c[l++]=a[i];
				
			}
		}
		System.out.println(count);
		for(int i=0;i<l;i++)
			System.out.print(c[i]);
	}

}
