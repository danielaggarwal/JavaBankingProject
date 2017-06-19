/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package bankingproject;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class BankingProject extends JFrame implements ActionListener
{
    JButton b1,b2;
   JPanel p1;
    
       BankingProject()
    {
         try
         {
        p1=new JPanel();
	p1.setLayout(null);
        
              
        b1=new JButton("LOGIN");
        b1.addActionListener(this);
         Font f=new Font("monotype corsiva",Font.BOLD,20);
        b1.setFont(f);
        b1.setForeground(Color.black);
        

        b2=new JButton("QUIT");
        b2.addActionListener(this);
        Font f1=new Font("monotype corsiva",Font.BOLD,20);
        b2.setFont(f1);
        b2.setForeground(Color.black);
        b1.setBounds(600,500,100,40);
        b2.setBounds(800,500,100,40);

                //l1=new JLabel("ICICI BANK");
		//l2=new JLabel("BANKING MANAGEMENT SYSTEM");
                //l1.setFont(f3);
		//l2.setFont(f2);
                
              //colouring  
                //l1.setForeground(Color.blue);
		//l2.setForeground(Color.red);
                //p1.setBackground(Color.pink);
                //b2.setForeground(Color.darkGray);
             
                
                //l1.setBounds(500,70,400,60);
		//l2.setBounds(270,290,800,60);               
                
               // Displaying
                //p1.add(l1);
                
		//p1.add(l2);
		p1.add(b1);
		p1.add(b2);
		//p1.add(l4);
		add(p1);
          
              b1.addActionListener(this);
              b2.addActionListener(this);
               
                setTitle("BANKING");
                setSize(1600,880);
                setVisible(true);
                setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		//setResizable(false);
                        
    }
    
         catch (Exception m)
		  {
		   System.out.println(m);
           }
    }
    
    @Override
    public void actionPerformed(ActionEvent e)
            {
                String res=e.getActionCommand();
              if(res.equals("LOGIN"))
              {
                  this.dispose();
                  logindetail ob=new logindetail();
              }
                  //logic 
                  
                  //else if(e.getSource==b2)
                  //this.dispose();
                  
                  else
              {
                  System.exit(0);
            }
    
    
            }
    public static void main(String[] args)
    {
       
        BankingProject l=new BankingProject();
                l.setTitle("BANKING");
                l.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		l.setResizable(false);
		l.setSize(1600,880);
                l.setVisible(true);
		
    }
    
}