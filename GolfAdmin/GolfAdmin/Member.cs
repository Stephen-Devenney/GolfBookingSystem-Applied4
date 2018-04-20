using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace GolfAdmin
{
    class Member
    {
        #region Fields
        // Fields
        private string memberNo, firstName, lastName, email, mobileNo, address;
        #endregion

        #region Constructors
        // Constructor To Add A New Member (memberNo Should Be Handled By Xampp)
        public Member(string firstName, string lastName, string email, string mobileNo, string address)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.mobileNo = mobileNo;
            this.address = address;
        }

        // Constructor For Referencing And Casting
        public Member(string memberNo, string firstName, string lastName, string email, string mobileNo, string address)
        {
            this.memberNo = memberNo;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.mobileNo = mobileNo;
            this.address = address;
        }
        #endregion

        #region Methods
        // ToString()
        public override string ToString()
        {
            return memberNo + ": " + firstName + " " + lastName + ", " + email + ", " + mobileNo + ", " + address;
        }


        // Get/Set Methods
        public string MemberNo
        {
            get { return this.memberNo; }
        }

        public string FirstName
        {
            get { return this.firstName; }
            set { this.firstName = value; }
        }

        public string LastName
        {
            get { return this.lastName; }
            set { this.lastName = value; }
        }

        public string Email
        {
            get { return this.email; }
            set { this.email = value; }
        }

        public string MobileNo
        {
            get { return this.mobileNo; }
            set { this.mobileNo = value; }
        }

        public string Address
        {
            get { return this.address; }
            set { this.address = value; }
        }
        #endregion
    }
}
