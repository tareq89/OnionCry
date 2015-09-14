var Sections = React.createClass({
				render: function() {
					var sections_Style = {
						textAlign: "left"
					}
					return (
						<div id="sections" style={sections_Style}>
							<form method="post" name="thform" autoComplete="off">
								<TblHead />							
								<InfoBlockHeader_attFloatNone />
								<InfoBlockHeader_attFloatNone_fixedWarningMsgDiv />
								<AttendanceTab />
								<TabData />
							</form>
						</div>
					);
				}
			});