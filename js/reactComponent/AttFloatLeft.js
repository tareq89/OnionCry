var AttFloatNone_timeInDiv = React.createClass({
				render: function () {
					var attFloatNone_timeInDiv_div2_Style = {
						float:"left",
						paddingLeft:5,
						paddingTop:5,
						textAlign: "center"
					};

					var attFloatNone_timeInDiv_div2_input_Style = {
						width: 100,
						fontSize: 14
					};

					var attFloatNone_timeInDiv_div1_Style = {
						float:"left",
						width:130,
						paddingTop:5						
					};
					return (
						<div className="attFloatNone" id="timeInDiv">
		                    <div style={attFloatNone_timeInDiv_div1_Style}>
		                        <strong> Time In: </strong>
		                    </div>
		                    <div style={attFloatNone_timeInDiv_div2_Style}>
		                        <input type="text" id="timeIn" style={attFloatNone_timeInDiv_div2_input_Style} autocomplete="off" className="ui-timepicker-input"/>
		                        <input type="button" id="setCurrentTimeIn" value="‹‹ Now" />
		                    </div>
		                </div>
					);
				}
			});


			var AttFloatNone_timeOutDiv = React.createClass({
				render: function() {

					var attFloatNone_timeOutDiv_div2_Style = {
						float:"left",
						paddingLeft:5,
						paddingTop:5,
						textAlign: "center"
					};

					var attFloatNone_timeOutDiv_div2_input_Style = {
						width: 100,
						fontSize: 14
					};

					var attFloatNone_timeInDiv_div2_Style = {
						float:"left",
						width:130,
						paddingTop:5						
					};
					return (
						<div className="attFloatNone" id="timeOutDiv">
	                        <div style={attFloatNone_timeInDiv_div2_Style}>
	                            <strong> Time Out: </strong>
	                        </div>
	                        <div style={attFloatNone_timeOutDiv_div2_Style} >
	                            <input type="text" id="timeOut" style={attFloatNone_timeOutDiv_div2_input_Style} autocomplete="off" class="ui-timepicker-input"/>
	                            <input type="button" id="setCurrentTimeOut" value="‹‹ Now" />
	                        </div>
	                    </div>
	                );
				}
			});


			var AttFloatNone_serviceProviderDiv = React.createClass({
				render: function() {
					var attFloatNone_serviceProviderDiv_div1_Style = {
						float:"left",
						width:130,
						paddingTop:5,
						textAlign: "right"						
					};


					var attFloatNone_serviceProviderDiv_div2_Style = {
						float:"left",
						paddingLeft:5,
						paddingTop: 5,
						textAlign: "left"						
					};


					return (
						<div className="attFloatNone" id="serviceProviderDiv">
							<div style={attFloatNone_serviceProviderDiv_div1_Style}>
		                        <strong>Service Provider: </strong>
		                    </div>
		                    <div style={attFloatNone_serviceProviderDiv_div2_Style}>
						        <select name="serviceProviderId" id="serviceProviderId" disabled="">
						                <option value="0">- Please Select -</option>
					                    <option value="960644">data check 1, Admin User</option>
					                    <option value="962783">23 23, Direct Care Staff</option>
					                    <option value="962777">3 3, Demo</option>
					                    <option value="962561">987 987, Counselor</option>
					                    <option value="932444">Bradley Abrams, Direct Support Professional</option>
					                    <option value="137370">Norma Abshire, Direct Care Staff</option>
						        </select>
	                        </div>
	                    </div>
					);
				}
			});



			var AttFloatNone_nonBillableDiv = React.createClass({
				render: function() {
					var attFloatNone_nonBillableDiv_div1 = {
						float:"left",
						width:130,
						paddingTop:5,
						textAlign: "right"
					};

					var attFloatNone_nonBillableDiv_div2 = {
						float:"left",
						paddingTop:3,
						textAlign: "left"
					}
					return (
						<div className="attFloatNone" id="nonBillableDiv">
                            <div style={attFloatNone_nonBillableDiv_div1}>
                                <strong> Non Billable: </strong>
                            </div>
                            <div style={attFloatNone_nonBillableDiv_div2}>
                                <input type="checkbox" id="nonBillable" value="true"/>
                            </div>
                        </div>
					);
				}
			});


			var AttFloatLeft = React.createClass({
				render: function() {
					return (
						<div className="attFloatLeft">
							<AttFloatNone_timeInDiv />
							<AttFloatNone_timeOutDiv />
							<AttFloatNone_serviceProviderDiv />
							<AttFloatNone_nonBillableDiv />
						</div>
					);
				}
			});