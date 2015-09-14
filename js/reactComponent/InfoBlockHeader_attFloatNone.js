var InfoBlockHeader_attFloatNone = React.createClass({
				render: function(){

					var infoBlockHeader_attFloatNone_Style = {
						textAlign: "right"
					};
					return (
						<div className="infoBlockHeader attFloatNone" style={infoBlockHeader_attFloatNone_Style}>
				            <span className="attFloatLeft">
				                <span className="legendBox col5 " title="Incomplete">&nbsp;&nbsp;&nbsp;</span><span>Incomplete
				                &nbsp;&nbsp;</span>
				                <span className="legendBox col1 " title="In Prep">&nbsp;&nbsp;&nbsp;</span><span>In Prep
				                &nbsp;&nbsp;</span>
				                <span className="legendBox col2 " title="Approved">&nbsp;&nbsp;&nbsp;</span><span>Approved
				                &nbsp;&nbsp;</span>
				                <span className="legendBox col3 " title="Submitted for Billing">&nbsp;&nbsp;&nbsp;</span><span>Submitted for Billing
				                &nbsp;&nbsp;</span>
				                <span className="legendBox col4 " title="New">&nbsp;&nbsp;&nbsp;</span><span>New
				                &nbsp;&nbsp;</span>
				            </span>
				            <span className="attFloatRight" id="attTypeDetails">
				                <a href="javascript:alert('/ma/attendance/attendanceHelp?typeId=21531','Help',770,550,false);">
				                    <strong>Attendance Type Details</strong>
				                    <img src="https://develop.therapbd.net/ma/images/infoIcon.png" alt="Click here for Information" className="infobtn" border="0"/>
				                </a>
				            </span>
				        </div>
					);
				}
			});