/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package bankingproject;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;
import javax.swing.*;


public class logindetail extends JFrame implements ActionListener
{
    JLabel l1,l2;
    JButton b1,b2,b3;
    JPanel p1;
    JTextField t1,t2;
    JPasswordField pw;
    Connection con;
    ResultSet rs;
    Statement st;

logindetail()
    {
        try
		{
        
        p1=new JPanel();
	p1.setLayout(null);
       
        
        Class.forName("com.mysql.jdbc.Driver");
	Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/bank","root" ,"");
        st=con.createStatement( );
        
        
        //initialize
               // l1=new JLabel("LOGIN DETAILS");
		 l1=new JLabel("USERNAME");
         Font f=new Font("monotype corsiva",Font.BOLD,30);
     l1.setFont(f);
     l1.setForeground(Color.black);
         l2=new JLabel("PASSWORD");
         Font f1=new Font("monotype corsiva",Font.BOLD,30);
     l2.setFont(f1);
     l2.setForeground(Color.black);
         t1=new JTextField(20);
         t2=new JTextField(20);
         b1=new JButton("SUBMIT");
         Font f2=new Font("monotype corsiva",Font.BOLD,20);
     b1.setFont(f2);
     b1.setForeground(Color.black);
         b2=new JButton("RESET");
         Font f3=new Font("monotype corsiva",Font.BOLD,20);
     b2.setFont(f3);
     b2.setForeground(Color.black);
         b3=new JButton("CANCEL");
         Font f4=new Font("monotype corsiva",Font.BOLD,20);
     b3.setFont(f4);
     b3.setForeground(Color.black);
         l1.setBounds(200,250,250,70);
         l2.setBounds(200,300,250,130);
         t1.setBounds(500,280,120,20);
         t2.setBounds(500,360,120,20);
         b1.setBounds(500,600,150,40);
         b2.setBounds(700,600,150,40);
         b3.setBounds(900,600,150,40);
         
            //    pw=new JPasswordField(20);   
              
              
              //FONT SETTING
                //l1.setFont(f1);                
              //colouring  
                //l1.setForeground(Color.red);
		//t1.setBackground(Color.yellow);
                //pw.setBackground(Color.yellow);
		//b1.setBackground(Color.blue);
		//b2.setBackground(Color.blue);
                //b3.setBackground(Color.blue);
               //b1.setForeground(Color.red);
		//b2.setForeground(Color.red);
                //b3.setForeground(Color.red);
                //p1.setBackground(Color.white);
                //t1.setForeground(Color.black);
                //pw.setForeground(Color.black);
            
                //l1.setBounds(400,120,500,60);
	//	pw.setBounds(650,410,300,30);
                
                // Displaying
                p1.add(l1);
		p1.add(l2);
           	p1.add(b1);
		p1.add(b2);
                p1.add(b3);
                p1.add(t1);
                p1.add(t2);
          //      p1.add(pw);
		add(p1);
                
                setVisible(true);
                setTitle("Login Detail");
                setSize(1600,880);
                
                b1.addActionListener(this);
                b2.addActionListener(this);
                b3.addActionListener(this);
                
                } 
               
                catch(Exception m)
		{
		System.out.println(m);
		}
               }

    @Override
    public void actionPerformed(ActionEvent e)
{
    String res=e.getActionCommand();
    if(res.equals("CANCEL"))
    {
        this.dispose();
    }
    
       else if(res.equals("RESET"))
    {
        t1.setText("");
        t2.setText("");
               
    }
    else if(res.equals("SUBMIT"))
    {
        
        String str1=t1.getText();
		String str2=t2.getText();
		try
		{
		rs=st.executeQuery("select * from people where username='"+str1+"' and password='"+str2+"' ");
		if(rs.next())
		{
		this.dispose();
                mainmenu o=new mainmenu();
		}
else if(str1.length()==0)
{
JOptionPane.showMessageDialog(this,"Enter the username.","Login",JOptionPane.INFORMATION_MESSAGE);
}
else if(str2.length()==0)
{
JOptionPane.showMessageDialog(this,"Enter the password.","Login",JOptionPane.INFORMATION_MESSAGE);
}


                else
		{
		JOptionPane.showMessageDialog(this,"Either username or password is wrong.","Login",JOptionPane.INFORMATION_MESSAGE);
		}
		}
                
                catch(SQLException | HeadlessException w)
		{
		System.out.println(w);
		} 
                
                
                
	}
}


    public static void main(String[] args)
    {
       
        logindetail e=new logindetail();
                e.setTitle("login");
    		e.setSize(1600,880);
                e.setVisible(true);
		
    }
}    