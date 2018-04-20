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
    public sealed partial class EditPage : Page
    {
        #region Fields
        // Fields
        private string connectionString = "datasource=127.0.0.1;port=3306;username=root;password=;database=golf;SslMode=None;charset=utf8;";
        private string memberIDQuery, memberNo, firstName, lastName, email, mobileNo, address;
        private Member selectedMember;
        #endregion
       
        #region Constructor
        // Constructor
        public EditPage()
        {
            this.InitializeComponent();

            // Prevents Encoding Error
            EncodingProvider ppp;
            ppp = CodePagesEncodingProvider.Instance;
            Encoding.RegisterProvider(ppp);
        }
        #endregion

        #region lbMembersSelectedItemChange

        // When User Changes Selected Member In lbMembers
        private void lbMembers_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            // Makes Sure A Member Is Selected
            if (lbMembers.SelectedIndex != -1)
            {
                // Cast Selected Member
                Member mObj = (Member)lbMembers.SelectedItem;

                // Create Connection
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    // MySql Command That Searches For Selected Member
                    MySqlCommand command = new MySqlCommand("SELECT * FROM userdetails WHERE (MemberNo) = (@MemberNo)", connection);
                    command.Parameters.AddWithValue("@MemberNo", mObj.MemberNo);

                    // Reads Selected Member And Displays Its Details For Editing
                    using (MySqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            txtFirstName.Text = reader.GetString("firstName");
                            txtLastName.Text = reader.GetString("lastName");
                            txtEmail.Text = reader.GetString("email");
                            txtMobileNo.Text = reader.GetString("mobileNo");
                            txtAddress.Text = reader.GetString("address");
                        }
                    }

                    connection.Close();
                }
            }
            else
            {
                // Resets Textboxes
                txtFirstName.Text = "";
                txtLastName.Text = "";
                txtEmail.Text = "";
                txtMobileNo.Text = "";
                txtAddress.Text = "";
            }

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

        #region UpdateMember
        // Method To Edit Selected Member In lbMembers
        private void btnUpdate_Click(object sender, RoutedEventArgs e)
        {
            // If A Member Is Selected
            if(lbMembers.SelectedIndex != -1)
            {
                // Cast Selected Members
                Member mObj = (Member)lbMembers.SelectedItem;

                // Create MySql Connection
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    // MySql Command That Will Be Executed
                    MySqlCommand command = new MySqlCommand("UPDATE userdetails SET firstName = (@firstName), " +
                                                            "lastName = (@lastName), " +
                                                            "email = (@email), " +
                                                            "mobileNo = (@mobileNo), " +
                                                            "address = (@address) " +
                                                            "WHERE MemberNo = (@MemberNo)", connection);

                    // References To Variables
                    command.Parameters.AddWithValue("@MemberNo", mObj.MemberNo);
                    command.Parameters.AddWithValue("@firstName", txtFirstName.Text);
                    command.Parameters.AddWithValue("@lastName", txtLastName.Text);
                    command.Parameters.AddWithValue("@email", txtEmail.Text);
                    command.Parameters.AddWithValue("@mobileNo", txtMobileNo.Text);
                    command.Parameters.AddWithValue("@address", txtAddress.Text);
                    command.ExecuteNonQuery();

                    connection.Close();
                }
            }

            // Refresh lbMembers
            refreshList();
        }
        #endregion

        #region RefreshlbMembers
        // Refresh lbMembers When Member ID Has Been Changed (Search Function)
        private void txtMemberID_TextChanged(object sender, TextChangedEventArgs e)
        {
            refreshList();
        }

        // Method To Refresh lbMembers
        private void refreshList()
        {
            // Assign MemberID To A Variable Then Clear lbMembers To Make Sure Older Searches Are Not Visible
            memberIDQuery = txtMemberID.Text;
            lbMembers.Items.Clear();

            // Create Connection
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                connection.Open();

                // MySql Command That Narrows Down The Available Members To Entered Member
                MySqlCommand command = new MySqlCommand("SELECT * FROM userdetails WHERE MemberNo LIKE @memberID ORDER BY MemberNo ASC", connection);
                command.Parameters.AddWithValue("@memberID", "%" + memberIDQuery + "%");

                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        memberNo = reader.GetString("MemberNo");
                        firstName = reader.GetString("firstName");
                        lastName = reader.GetString("lastName");
                        email = reader.GetString("email");
                        mobileNo = reader.GetString("mobileNo");
                        address = reader.GetString("address");

                        selectedMember = new Member(memberNo, firstName, lastName, email, mobileNo, address);
                        lbMembers.Items.Add(selectedMember);

                        memberIDQuery = "";
                    }
                }
                connection.Close();
            }
        }
        #endregion
    }
}
