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
    public sealed partial class ListPage : Page
    {
        #region Fields
        // Fields
        private string memberNo, firstName, lastName, email, mobileNo, address;
        private Member selectedMember;
        string connectionString = "datasource=127.0.0.1;port=3306;username=root;password=;database=golf;SslMode=None;charset=utf8;";
        #endregion

        #region Constructor
        // Constructor
        public ListPage()
        {
            this.InitializeComponent();

            // Prevents Encoding Error
            EncodingProvider ppp;
            ppp = CodePagesEncodingProvider.Instance;
            Encoding.RegisterProvider(ppp);

            // List Members To lstMembers
            listMembers();
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

        #region ListMembers

        // Method That Displays Members
        private void listMembers()
        {
            // Create Connection
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                connection.Open();

                // MySql Command That Selects All Users
                MySqlCommand command = new MySqlCommand("SELECT * FROM userdetails", connection);

                // Reads Members Into lstMembers
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
                        lstMembers.Items.Add(selectedMember);
                    }
                }

                connection.Close();
            }
        }
        #endregion
    }
}
