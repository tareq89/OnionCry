var FloatLeft_Therap_Logo = React.createClass({
				render: function() {

					var float_left_Style = {
						display: "block"
					};

					return (
						<div className="floatLeft">
							<img src="https://develop.therapbd.net/ma/images/newfpage/therap_logo.gif" alt="Therap Services, LLC" width="143" height="51" style={float_left_Style} />
						</div>
					);
				}
			});			


var FloatLeft__header_leftMenu = React.createClass({
	render: function() {
		return (
				<div className="floatLeft header_leftMenu">
					    
					    <div className="mode">
					        
					    </div>
					    <div className="fpageName" id="heightOffsetOfParam">
					        <div className="floatLeft" id="fpageLink">
					            
					                        <a href="/ma/newfpage/switchFirstPage">
					                            Dashboard
					                        </a>
					                    
					            &nbsp;
					        </div>
					        
					            <div className="floatLeft menu_parent" id="menu_parent_quick_link">
					               |&nbsp;<a href="#">Quick Links</a>
					            </div>
					        
					        <div className="clearBoth"></div>
					    </div>
					</div>
				);
			}
		});

var FloatRight__header_rightMenu = React.createClass({
	render: function() {
		return (
			<div className="floatRight header_rightMenu" align="right">			 
			  <div className="providerInfo">Mountain Valley Developmental Services</div>
			  <div className="loginName"> Michael Vanpelt, therap billing </div>
			  <div className="logout">			      
			        <a href="/auth/logout">Logout</a>			      
			  </div>
			</div>
		);
	}
});


var Menu_child_quick_link = React.createClass({
	render: function() {

		var menu_child_quick_link_Style = {
			position: "absolute",
			visibility: "hidden",
			top: 49,
			left: 215,
			display: "block"
		};
		return (
				<div id="menu_child_quick_link" className="menu_child" align="left" style={menu_child_quick_link_Style}>
				    <table cellspacing="0">
		                <tbody>
			                <tr onmouseover="this.style.backgroundColor='#bfd1dd';" onmouseout="this.style.backgroundColor='#DCE7EC';">
			                    <td align="left" className="quickmenu_module">
			                        &nbsp;T-Log
			                    </td>
			                    <td>-</td>
			                    <td align="right" className="quickmenu_links">
			                        
			                            <a href="/ma/logbook/entryProgramList?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">New</a>
			                        &nbsp; | &nbsp;
			                            <a href="/ma/logbook/listController?listType=LT_LB_WITH_PGM&amp;backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">View</a>
			                        &nbsp; | &nbsp;
			                            <a href="/ma/logbook/search?formType=LB&amp;backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">Search</a>
			                        
			                    </td>
			                </tr>
			            
			                <tr onmouseover="this.style.backgroundColor='#bfd1dd';" onmouseout="this.style.backgroundColor='#DCE7EC';">
			                    <td align="left" className="quickmenu_module">
			                        &nbsp;GER
			                    </td>
			                    <td>-</td>
			                    <td align="right" className="quickmenu_links">
			                        
			                            <a href="/ma/ger/programList?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">New</a>
			                        &nbsp; | &nbsp;
			                            <a href="/ma/ger/gerSearch?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">Search</a>
			                        
			                    </td>
			                </tr>
			            
			                <tr onmouseover="this.style.backgroundColor='#bfd1dd';" onmouseout="this.style.backgroundColor='#DCE7EC';">
			                    <td align="left" className="quickmenu_module">
			                        &nbsp;ISP Data
			                    </td>
			                    <td>-</td>
			                    <td align="right" className="quickmenu_links">
			                        
			                            <a href="/ma/isp/programListData?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">New</a>
			                        &nbsp; | &nbsp;
			                            <a href="/ma/isp/ispDataSearch?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">Search</a>
			                        
			                    </td>
			                </tr>
			            
			                <tr onmouseover="this.style.backgroundColor='#bfd1dd';" onmouseout="this.style.backgroundColor='#DCE7EC';">
			                    <td align="left" className="quickmenu_module">
			                        &nbsp;Appointments
			                    </td>
			                    <td>-</td>
			                    <td align="right" className="quickmenu_links">
			                        
			                            <a href="/ma/hlth/appointments?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">New</a>
			                        &nbsp; | &nbsp;
			                            <a href="/ma/hlth/appSearch?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">Search</a>
			                        
			                    </td>
			                </tr>
			            
			                <tr onmouseover="this.style.backgroundColor='#bfd1dd';" onmouseout="this.style.backgroundColor='#DCE7EC';">
			                    <td align="left" className="quickmenu_module">
			                        &nbsp;Blood Glucose
			                    </td>
			                    <td>-</td>
			                    <td align="right" className="quickmenu_links">
			                        
			                            <a href="/ma/hlth/bloodGlucose?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">New</a>
			                        &nbsp; | &nbsp;
			                            <a href="/ma/hlth/bgSearch?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">Search</a>
			                        
			                    </td>
			                </tr>
			            
			                <tr onmouseover="this.style.backgroundColor='#bfd1dd';" onmouseout="this.style.backgroundColor='#DCE7EC';">
			                    <td align="left" className="quickmenu_module">
			                        &nbsp;Intake/Elimination
			                    </td>
			                    <td>-</td>
			                    <td align="right" className="quickmenu_links">
			                        
			                            <a href="/ma/hlth/individualDateSelect?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">New</a>
			                        &nbsp; | &nbsp;
			                            <a href="/ma/hlth/ieSearch?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">Search</a>
			                        
			                    </td>
			                </tr>
			            
			                <tr onmouseover="this.style.backgroundColor='#bfd1dd';" onmouseout="this.style.backgroundColor='#DCE7EC';">
			                    <td align="left" className="quickmenu_module">
			                        &nbsp;Vital Signs
			                    </td>
			                    <td>-</td>
			                    <td align="right" className="quickmenu_links">
			                        
			                            <a href="/ma/hlth/vitalSigns?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">New</a>
			                        &nbsp; | &nbsp;
			                            <a href="/ma/hlth/vsSearch?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">Search</a>
			                        
			                    </td>
			                </tr>
			            
			                <tr onmouseover="this.style.backgroundColor='#bfd1dd';" onmouseout="this.style.backgroundColor='#DCE7EC';">
			                    <td align="left" className="quickmenu_module">
			                        &nbsp;MAR Data
			                    </td>
			                    <td>-</td>
			                    <td align="right" className="quickmenu_links">
			                        
			                            <a href="/ma/mar/marDataProgramList?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">Record</a>
			                        &nbsp; | &nbsp;
			                            <a href="/ma/mar/marDataSearch?backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">Search</a>
			                        
			                    </td>
			                </tr>
			            
			                <tr onmouseover="this.style.backgroundColor='#bfd1dd';" onmouseout="this.style.backgroundColor='#DCE7EC';">
			                    <td align="left" className="quickmenu_module">
			                        &nbsp;SComm
			                    </td>
			                    <td>-</td>
			                    <td align="right" className="quickmenu_links">
			                        
			                            <a href="/ma/scomm/showMailbox?selectedFolderId=1&amp;listType=LT_INBOX&amp;firstPage=true&amp;backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">Inbox</a>
			                        &nbsp; | &nbsp;
			                            <a href="/ma/scomm/composeTypeSelect?&amp;backLink=%2Fnewfpage%2FswitchFirstPage&amp;backType=1">Compose</a>
			                        
			                    </td>
			                </tr>
		            
		    			</tbody>
		    		</table>
				        
				</div>
		);
	}
});


var Menu_child_recent_individual = React.createClass({
	render: function() {
		return (
			<div id="menu_child_recent_individual" className="menu_child" align="left">
			    <table cellspacing="0">
			        
			    </table>
			</div>
		);
	}
});

var ClearBoth = React.createClass({
	render: function() {
		return (
			<div className="ClearBoth"></div>
		);
	}
});

var HeaderNew = React.createClass({
	render: function() {
		return (
			<div id="headerNew">        
				<noscript>
				    &lt;div id="checkJSDiv"&gt;
				        Please enable JavaScript to access all features of Therap Services Application.
				    &lt;/div&gt;
				</noscript>

				<FloatLeft_Therap_Logo />
				<FloatLeft__header_leftMenu />
				<FloatRight__header_rightMenu />
				<Menu_child_quick_link />
				<Menu_child_recent_individual />					
				
				<script type="text/javascript">				    
				        at_attach("menu_parent_quick_link", "menu_child_quick_link");				    
				</script>
				
				<ClearBoth />
			</div>
		);
	}
});