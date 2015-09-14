var TblHead = React.createClass({
				render: function() {
					var tblHead_Style = {
						marginBottom: 5,
						borderRadius: 5,
						border: "1 solid #D3D3D3",
						backgroundColor: "#F6F7F8"
					};
					var h2_Style = {
						fontWeight: "bold"
					};

					var strong_date_Style = {
						fontSize:16
					};

					return (
						<div className="tblHead" style={tblHead_Style}>
				            <h2 style={h2_Style}>Attendance</h2>
				            <strong>Program(Site):</strong>Siham - Florida 2(Siham - Florida)<br/>
			                <strong>Service Description (Code):</strong> 10059(SDC01)<br/>
				            <strong>Attendance Type Name:</strong> !1 attendance<br/>
				            <strong>Start Date:</strong> September, 17, 2014,
				            <strong>End Date:</strong> September, 17, 2014<br/>
				            <strong style={strong_date_Style}>September, 2014</strong>
			        	</div>
			        );
				}
			});