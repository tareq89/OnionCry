var AttendanceTab = React.createClass({
				render: function() {
					return(
							<div id="attendanceTab">
					            <div>
			                        <span id="inputTab" tabIndex="1" className="tabSelected">Input</span>
			                        <span id="updateTab" tabIndex="3">Update</span>
			                        <span id="approveTab" tabIndex="4">Approve</span>
			                        <span id="billingTab" tabIndex="5">Generate Billing Data</span>
					            </div>
					        </div>
						);
				}
			});
