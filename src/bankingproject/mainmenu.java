package bankingproject;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
public class mainmenu extends JFrame implements ActionListener
{
    JLabel l1;
    JButton b1,b2,b3,b4,b5,b6;
    JPanel p1;
        mainmenu()
    {
          p1=new JPanel();
	p1.setLayout(null); 
        //initialize
                l1=new JLabel("MAIN MENU");
                Font f=new Font("monotype corsiva",Font.BOLD,50);
     l1.setFont(f);
     l1.setForeground(Color.black);
	        b1=new JButton("NEW ACCOUNT NO.");
                Font f1=new Font("monotype corsiva",Font.BOLD,30);
     b1.setFont(f1);
     b1.setForeground(Color.black);
    
                b2=new JButton("TRANSACTION");
                Font f2=new Font("monotype corsiva",Font.BOLD,30);
     b2.setFont(f2);
     b2.setForeground(Color.black);
    
                b3=new JButton("BANK STATEMENT");
                Font f3=new Font("monotype corsiva",Font.BOLD,30);
     b3.setFont(f3);
     b3.setForeground(Color.black);
    
                b4=new JButton("QUERY");
                Font f4=new Font("monotype corsiva",Font.BOLD,30);
     b4.setFont(f4);
     b4.setForeground(Color.black);
    
                b5=new JButton("ABOUT US");
    Font f5=new Font("monotype corsiva",Font.BOLD,30);
     b5.setFont(f5);
     b5.setForeground(Color.black);
    
                b6=new JButton("EXIT");
		Font f6=new Font("monotype corsiva",Font.BOLD,30);
     b6.setFont(f6);
     b6.setForeground(Color.black);
    
//l4.setBounds(240,50,800,600);            
                //FONT SETTING
                //colouring        
    l1.setBounds(660,100,400,40);
    b1.setBounds(600,200,400,50);
    b2.setBounds(600,250,400,50);
    b3.setBounds(600,300,400,50);
    b4.setBounds(600,350,400,50);
    b5.setBounds(600,400,400,50);
    b6.setBounds(600,450,400,50);
    p1.add(l1);
// Displaying
                p1.add(l1);
		p1.add(b1);
		p1.add(b2);
                p1.add(b3);
                p1.add(b4);
		p1.add(b5);
                p1.add(b6);
		add(p1);            
            b1.addActionListener(this);
            b2.addActionListener(this);
            b3.addActionListener(this);
            b4.addActionListener(this);
            b5.addActionListener(this);
            b6.addActionListener(this);                          
                setSize(1600,880);
		setVisible(true);
                setTitle("MAIN MENU");
    }
    @Override
    public void actionPerformed(ActionEvent e)
{
    String res=e.getActionCommand();
    if(res.equals("NEW ACCOUNT NO."))
    {
        this.dispose();
        newaccount ob=new newaccount();
            }
           else if(res.equals("TRANSACTION"))
    {
        this.dispose();
        transaction ob1=new transaction();
                   }
       else if(res.equals("BANK STATEMENT"))
    {
        this.dispose();
        bankstatement ob2=new bankstatement();
                   }
       else if(res.equals("QUERY"))
    {
        this.dispose();
        query r=new query();
                   }
       else if(res.equals("ABOUT US"))
    {
        this.dispose();
        about j=new about();
                   }
    else if(res.equals("EXIT"))
    {
        this.dispose();         
    }
}    
public static void main(String[] args) {
        // TODO code application logic here
        mainmenu l=new mainmenu();
	}}