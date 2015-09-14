var BasicInput = React.createClass({
				render: function() {

					var basciInputStyle = {
						textAlign: "left"
					};

					var attFloatNone_div_Style1 = {
						float:"left",
						width:130
					};

					var attFloatNone_div_Style2 = {
						float:"left",
						paddingLeft:5						
					};

					var attFloatNone_div_Style3 = {
						float:"left",
						width:"auto",
						paddingTop:5,
						textAlign: "left"					
					};

					return (
						<td id="basciInput" style={basciInputStyle} noWrap="nowrap">
                            <div  className="attFloatNone" >
								<div style={attFloatNone_div_Style1}>
                                	<strong><span className="astericRed">*</span> Attendance Options:</strong>
                                </div>
	                            <div style={attFloatNone_div_Style2}>
	        						<select name="attendanceOptionId" id="attendanceOptionId">
						                <option value="0">- Please Select -</option>
						                <option value="29862">present</option>
						                <option value="29865">absent</option>
							        </select>
	                            </div>
                            </div>
                            <div className="attFloatNone" style={attFloatNone_div_Style3}>
                            	<div>
	                                <div>
	                                	<strong>General Comment:</strong>
									</div>

								    <textarea id="commonComment" name="commonComment" cols="30" rows="3" maxlength="350" onkeydown="therapTextCounter(&quot;commonComment&quot;, 350);" onkeyup="therapTextCounter(&quot;commonComment&quot;, 350);" onfocus="therapTextCounter(&quot;commonComment&quot;, 350);">
								    </textarea>
    								<div id="commonComment_cnt" nowrap="">About 350 characters left</div>
                            	</div>
                        	</div>
                        </td>
					);
				}
			});