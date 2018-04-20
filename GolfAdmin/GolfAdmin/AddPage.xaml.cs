using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;
using MySql.Data.MySqlClient;
using System.Text;

// The Blank Page item template is documented at https://go.microsoft.com/fwlink/?LinkId=234238

namespace GolfAdmin
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class AddPage : Page
    {
        #region Fields
        // Fields
        private string firstName, lastName, email, mobileNo, address;
        private Member newMember;
        private string connectionString = "datasource=127.0.0.1;port=3306;username=root;password=;database=golf;SslMode=None;charset=utf8;";
        #endregion

        #region Constructor
        // Constructor
        public AddPage()
        {
            this.InitializeComponent();

            // Prevents Encoding Error
            EncodingProvider ppp;
            ppp = CodePagesEncodingProvider.Instance;
            Encoding.RegisterProvider(ppp);

            //Sets Error Message To Empty
            tblStatus.Text = "";
        }
        #endregion

        #region Navigation
        // Navigation - Home Page
        private void btnHome_Click(object sender, RoutedEventArgs e)
        {
            this.Frame.Navigate(typeof(MainPage));
        }

        // Navigation - List Page
        private void btnList_Click(object sender, RoutedEventArgs e)
        {
            this.Frame.Navigate(typeof(ListPage));
        }

        // Navigation - Add Page
        private void btnAdd_Click(object sender, RoutedEventArgs e)
        {
            this.Frame.Navigate(typeof(AddPage));
        }

        // Navigation - Edit Page
        private void btnEdit_Click(object sender, RoutedEventArgs e)
        {
            this.Frame.Navigate(typeof(EditPage));
        }
        #endregion

        #region AddMember
        // Method To Add Member
        private void btnAddMember_Click(object sender, RoutedEventArgs e)
        {
            // Assigns Entered Variables
            firstName = txtFirstName.Text;
            lastName = txtLastName.Text;
            email = txtEmail.Text;
            mobileNo = txtMobileNo.Text;
            address = txtAddress.Text;

            // Can Only Create If There Are No Empty Fields
            if (txtFirstName.Text != "" && txtLastName.Text != "" && txtEmail.Text != "" && txtMobileNo.Text != "" && txtAddress.Text != "")
            {
                // Create Member Object
                newMember = new Member(firstName, lastName, email, mobileNo, address);

                //Update New Member To Database
                writeToDB(newMember);
                tblStatus.Text = "Successfully Added!";
            }
            else
                tblStatus.Text = "Error!";
        }
        #endregion

        #region WriteToDB
        // Method To Write To Database
        private void writeToDB(Member memberObj)
        {
            // Create Connection
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                connection.Open();

                // MySql Command That Inserts Values Into Database
                MySqlCommand insertCommand = new MySqlCommand("INSERT INTO userdetails(firstName,lastName,email,mobileNo,address)VALUES(@firstName,@lastName,@email,@mobileNO,@address)", connection);
                insertCommand.Parameters.AddWithValue("@firstName", memberObj.FirstName);
                insertCommand.Parameters.AddWithValue("@lastName", memberObj.LastName);
                insertCommand.Parameters.AddWithValue("@email", memberObj.Email);
                insertCommand.Parameters.AddWithValue("@mobileNo", memberObj.MobileNo);
                insertCommand.Parameters.AddWithValue("@address", memberObj.Address);
                insertCommand.ExecuteNonQuery();

                connection.Close();
            }

            // Reset Textboxes
            txtFirstName.Text = "";
            txtLastName.Text = "";
            txtEmail.Text = "";
            txtMobileNo.Text = "";
            txtAddress.Text = "";
        }
        #endregion
    }
}
