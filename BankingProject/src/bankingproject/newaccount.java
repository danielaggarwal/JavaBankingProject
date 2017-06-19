package bankingproject;

import java.awt.*;
import java.awt.event.*;
import java.sql.*;
import java.util.Calendar;
import javax.swing.*;

public class newaccount extends JFrame implements ActionListener
 {
        JLabel l1,l2,l3,l4,l5,l6,l7,l8,l9,msg;
	JTextField t1,t2,t3,t4,t5;
	JButton b1,b2,b3;
        CheckboxGroup g,g1;
        Choice c;
	Container cp;
	Connection con;
	ResultSet rs,rs1;
	Statement st;
        String k[] = {"Jan", "Feb", "Mar", "Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"," "};
        Calendar kp=Calendar.getInstance();
        PreparedStatement ps;	
	
	newaccount()
	{

            try
		{
		cp=getContentPane();
		cp.setLayout(null);
		
	l1=new JLabel("NEW   ACCOUNT   ENTRY");
    Font f=new Font("arial",Font.BOLD,25);
     l1.setFont(f);
     l1.setForeground(Color.blue);
Font f1=new Font("arial",Font.PLAIN,25);
     setFont(f1);
     setForeground(Color.black);
     {
         l2=new JLabel("NAME");
         l3=new JLabel("GENDER");
         l4=new JLabel("PHONE NO.");
        l5=new JLabel("EMAIL ID");
        l6=new JLabel("DATE OF OPENING");
        l7=new JLabel("ADDRESS");
        l8=new JLabel("AGE");
        l9=new JLabel("A/C TYPE");
      b1=new JButton("SAVE");
         b2=new JButton("RESET");
         b3=new JButton("BACK");
     }
     t1=new JTextField(20);
    t2=new JTextField(20);
    t3=new JTextField(20);
    t4=new JTextField(20);
    t5=new JTextField(20);
    msg=new JLabel("");
	
    
  
     g=new CheckboxGroup();
        Checkbox chkMale=new Checkbox("Male",false,g);
        chkMale.setBounds(250,140,100,20);
        Checkbox chkFemale=new Checkbox("Female",false,g);
        chkFemale.setBounds(350,140,150,20);
        g1=new CheckboxGroup();
        Checkbox chkAge=new Checkbox("21-30",false,g1);
        chkAge.setBounds(250,510,50,20);
        Checkbox chkAge1=new Checkbox("31-50",false,g1);
        chkAge1.setBounds(400,510,50,20);
        Checkbox chkAge2=new Checkbox("51-60",false,g1);
        chkAge2.setBounds(550,510,50,20);
        c=new Choice();
        c.add("SAVING");
        c.add("CURRENT");
        
        l1.setBounds(600,20,400,30);
        l2.setBounds(60,50,100,70);
        l3.setBounds(60,90,150,130);
        l4.setBounds(60,120,150,190);
        l5.setBounds(60,160,150,250);
        l6.setBounds(60,205,400,310);
        l7.setBounds(60,260,100,370);
        l8.setBounds(60,300,50,430);
        l9.setBounds(60,340,100,490);
        msg.setBounds(800,100,200,30);
        t1.setBounds(250,70,120,20);
        t2.setBounds(250,210,120,20);
        t3.setBounds(250,280,120,20);
        t4.setBounds(250,350,120,20);
        t5.setBounds(250,440,120,20);
        b1.setBounds(250,700,100,40);
        b2.setBounds(400,700,100,40);
        b3.setBounds(550,700,100,40);
        c.setBounds(240,575,100,50);
			
		 cp.add(l1);
        cp.add(l2);
        cp.add(t1);
        cp.add(l3);
        cp.add(l4);
        cp.add(t2);
        cp.add(l5);
        cp.add(t3);
        cp.add(l6);
        cp.add(t4);
        cp.add(l7);
        cp.add(t5);
        cp.add(l8);
        cp.add(l9);
        cp.add(msg);
        cp.add(b1);
        cp.add(b2);
        cp.add(b3);
        cp.add(chkMale);
        cp.add(chkFemale);
        cp.add(chkAge);
        cp.add(chkAge1);
        cp.add(chkAge2);
        cp.add(c);

    String p0,p3;
    int p2,p11;
    p0=k[kp.get(Calendar.MONTH)];
    p11= kp.get(Calendar.DATE);
    p2=kp.get(Calendar.YEAR);
    p3=p0+"/"+p11+"/"+p2;
    t4.setText(p3);
    t4.setEditable(false);

    
	
	
                b1.addActionListener(this);
                b2.addActionListener(this);
                b3.addActionListener(this);
                
                setSize(1600,880);
		setVisible(true);
		setResizable(true);
		setTitle("New Account");
                //setLocation(40,60);
    		}

                catch(Exception m)
		{
		System.out.println(m);
		}
   }     

 public void itemStateChanged(ItemEvent e)
{
}

    @Override
    public void actionPerformed(ActionEvent ae)
{	
	String s=ae.getActionCommand();
        switch (s) 
        {
         case "RESET":
               
             t1.setText("");
             t2.setText("");
             t3.setText("");
             t5.setText("");
             msg.setText("");
             b1.setVisible(true);
             break;
             
         case "BACK":
                
             this.dispose();
             mainmenu ob=new mainmenu();
             break;
        }

	if(s.equals("SAVE"))
	{
		
	String username=t1.getText();
	if(username.length()<2)
        {
        JOptionPane.showMessageDialog(this,"Enter the Account Name.","Message",JOptionPane.INFORMATION_MESSAGE);
        t1.setText("");
        return;
        }

	String gender=(String)g.getSelectedCheckbox().getLabel();
	String contact=t2.getText();
	if(contact.length()<6)
        {
        JOptionPane.showMessageDialog(this,"Enter the Phone No.","Message",JOptionPane.INFORMATION_MESSAGE);
        return;
        }
        try
        {
        long s11;
        s11=Integer.parseInt(contact);
        }
        catch(Exception e1)
        {
        JOptionPane.showMessageDialog(this,"Enter the Phone No in digits.","Message",JOptionPane.INFORMATION_MESSAGE);
        t2.setText("");
        return;
        }
		
        String email=t3.getText();
	if(email.length()<3)
        {
        JOptionPane.showMessageDialog(this,"Enter the Email.","Message",JOptionPane.INFORMATION_MESSAGE);
        t3.setText("");
        return;
        }
        int p1,p2,p3,p4;
        p1=email.indexOf("@");
        p2=email.indexOf(".");
        if((p1==-1)||(p2==-1))
        
        {
        JOptionPane.showMessageDialog(this,"Enter the Correct Email ID.","Message",JOptionPane.INFORMATION_MESSAGE);
        t3.setText("");
        return;
        }
        p3=email.lastIndexOf("@");
        p4=email.lastIndexOf(".");
        if((p1!=p3)||(p2!=p4))
        {
        JOptionPane.showMessageDialog(this,"Enter the Correct Emailid.","Message",JOptionPane.INFORMATION_MESSAGE);
        t3.setText("");
	return;
        }
		
	String dob=t4.getText();
        String add=t5.getText();
	if(add.length()<3)
        {
        JOptionPane.showMessageDialog(this,"Enter the Address.","Message",JOptionPane.INFORMATION_MESSAGE);
        t5.setText("");
	return;
        }
       
	String age=(String)g1.getSelectedCheckbox().getLabel();
        String choice=(String)c.getSelectedItem();
        
        try
	{
        Class.forName("com.mysql.jdbc.Driver");
	con=DriverManager.getConnection("jdbc:mysql://localhost:3306/complex2","root" ,"");
	
        ps=con.prepareStatement("insert into table1 values(?,?,?,?,?,?,?,?,?)");
		
        st=con.createStatement();
        rs=st.executeQuery("select *from table1 where email='"+email+"'");
        
        int i=0;
        while(rs.next())
        {
        i=1;
        System.out.println(rs.getString(1));
        } 
        if(i==1)
        {
        JOptionPane.showMessageDialog(this,"Emailid Already Exsits","Message",JOptionPane.INFORMATION_MESSAGE);  
        return;
        }

	String t="";
        rs1=st.executeQuery("select  ACNO from table1");
        while(rs1.next())
        {
        t=(rs1.getString(1));
        }
        int ac=Integer.parseInt(t)+1;
        String s10=""+ac;
        rs1.close();
        msg.setText("A/c No : "+s10);

  	ps.setString(1,username);
	ps.setString(2,gender);
	ps.setString(3,contact);
        ps.setString(4,email);
        ps.setString(5,dob);
	ps.setString(6,add);
        ps.setString(7,age);
	ps.setString(8,choice);
        ps.setString(9,s10);
	
	ps.executeUpdate();
	
	if(true)
	{			
	JOptionPane.showMessageDialog(this,"Data Submited Successfully with A/C No. : "+s10,"Message",JOptionPane.INFORMATION_MESSAGE);
	b1.setVisible(false);
	st.close();
	//this.dispose();
	}
        }
	
	catch(ClassNotFoundException | SQLException | HeadlessException | NumberFormatException w)
	{
	System.out.println(w);
	}
        }
}
    
public static void main(String args[])
    {
      newaccount r=new newaccount( );
    }
}