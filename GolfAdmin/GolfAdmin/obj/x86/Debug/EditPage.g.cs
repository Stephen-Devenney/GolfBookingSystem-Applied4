﻿#pragma checksum "C:\Users\Stephen\Documents\C# Projects\GolfAdmin\GolfAdmin\EditPage.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "1FB7C7E2EDB0F4664B53C1E8EFD61CFE"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GolfAdmin
{
    partial class EditPage : 
        global::Windows.UI.Xaml.Controls.Page, 
        global::Windows.UI.Xaml.Markup.IComponentConnector,
        global::Windows.UI.Xaml.Markup.IComponentConnector2
    {
        /// <summary>
        /// Connect()
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Windows.UI.Xaml.Build.Tasks"," 14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void Connect(int connectionId, object target)
        {
            switch(connectionId)
            {
            case 1:
                {
                    this.btnHome = (global::Windows.UI.Xaml.Controls.Button)(target);
                    #line 21 "..\..\..\EditPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.Button)this.btnHome).Click += this.btnHome_Click;
                    #line default
                }
                break;
            case 2:
                {
                    this.btnList = (global::Windows.UI.Xaml.Controls.Button)(target);
                    #line 24 "..\..\..\EditPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.Button)this.btnList).Click += this.btnList_Click;
                    #line default
                }
                break;
            case 3:
                {
                    this.btnAdd = (global::Windows.UI.Xaml.Controls.Button)(target);
                    #line 27 "..\..\..\EditPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.Button)this.btnAdd).Click += this.btnAdd_Click;
                    #line default
                }
                break;
            case 4:
                {
                    this.btnEdit = (global::Windows.UI.Xaml.Controls.Button)(target);
                    #line 30 "..\..\..\EditPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.Button)this.btnEdit).Click += this.btnEdit_Click;
                    #line default
                }
                break;
            case 5:
                {
                    this.txtMemberID = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                    #line 35 "..\..\..\EditPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.TextBox)this.txtMemberID).TextChanged += this.txtMemberID_TextChanged;
                    #line default
                }
                break;
            case 6:
                {
                    this.lbMembers = (global::Windows.UI.Xaml.Controls.ListBox)(target);
                    #line 36 "..\..\..\EditPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.ListBox)this.lbMembers).SelectionChanged += this.lbMembers_SelectionChanged;
                    #line default
                }
                break;
            case 7:
                {
                    this.txtFirstName = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                }
                break;
            case 8:
                {
                    this.txtLastName = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                }
                break;
            case 9:
                {
                    this.txtEmail = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                }
                break;
            case 10:
                {
                    this.txtMobileNo = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                }
                break;
            case 11:
                {
                    this.txtAddress = (global::Windows.UI.Xaml.Controls.TextBox)(target);
                }
                break;
            case 12:
                {
                    this.btnUpdate = (global::Windows.UI.Xaml.Controls.Button)(target);
                    #line 47 "..\..\..\EditPage.xaml"
                    ((global::Windows.UI.Xaml.Controls.Button)this.btnUpdate).Click += this.btnUpdate_Click;
                    #line default
                }
                break;
            default:
                break;
            }
            this._contentLoaded = true;
        }

        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Windows.UI.Xaml.Build.Tasks"," 14.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public global::Windows.UI.Xaml.Markup.IComponentConnector GetBindingConnector(int connectionId, object target)
        {
            global::Windows.UI.Xaml.Markup.IComponentConnector returnValue = null;
            return returnValue;
        }
    }
}

