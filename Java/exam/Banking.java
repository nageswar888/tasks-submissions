package exam;

class BankTransaction
{
	int money;
	BankTransaction(int money)
	{
		this.money = money;
	}
	void withdrawMoney()
	{
		System.out.println(money+" money is withdrawn");
	}
	void depositMoney()
	{
		System.out.println(money+" money is deposited");
	}
}
class Depositer extends Thread
{
	BankTransaction b = new BankTransaction(4000);
	public void run()
	{
		try{
		int i=0;
		System.out.println(Thread.MAX_PRIORITY);
		while(i<10)
		{
			b.withdrawMoney();
			Thread.sleep(500);
			i++;
		}
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
}
class Withdrawer extends Thread
{
	BankTransaction b = new BankTransaction(4000);
	public void run()
	{
		try{
		int i=0;
		System.out.println(Thread.MAX_PRIORITY);
		while(i<10)
		{
			b.depositMoney();
			Thread.sleep(500);
			i++;
			
		}
		
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
}
} 
 public class Banking {

	public static void main(String args[]) {
		
		Depositer b = new Depositer();
		Withdrawer w = new Withdrawer();
		b.start();
		w.start();
		
	}

 }
