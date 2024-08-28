const text = `
HloModule SyncTensorsGraph.316, input_output_alias={ {0}: (2, {}, must-alias), {1}: (1, {}, must-alias), {2}: (4, {}, must-alias), {3}: (5, {}, must-alias), {4}: (6, {}, must-alias), {5}: (7, {}, must-alias), {6}: (3, {}, must-alias), {7}: (8, {}, must-alias) }

%MaxComputation.87 (x.88: f32[], y.89: f32[]) -> f32[] {
  %x.88 = f32[] parameter(0)
  %y.89 = f32[] parameter(1)
  ROOT %maximum.90 = f32[] maximum(f32[] %x.88, f32[] %y.89)
}

%AddComputation.96 (x.97: f32[], y.98: f32[]) -> f32[] {
  %x.97 = f32[] parameter(0)
  %y.98 = f32[] parameter(1)
  ROOT %add.99 = f32[] add(f32[] %x.97, f32[] %y.98)
}

%AddComputation.131 (x.132: f32[], y.133: f32[]) -> f32[] {
  %x.132 = f32[] parameter(0)
  %y.133 = f32[] parameter(1)
  ROOT %add.134 = f32[] add(f32[] %x.132, f32[] %y.133)
}

%AddComputation.143 (x.144: f32[], y.145: f32[]) -> f32[] {
  %x.144 = f32[] parameter(0)
  %y.145 = f32[] parameter(1)
  ROOT %add.146 = f32[] add(f32[] %x.144, f32[] %y.145)
}

%AddComputation.184 (x.185: f32[], y.186: f32[]) -> f32[] {
  %x.185 = f32[] parameter(0)
  %y.186 = f32[] parameter(1)
  ROOT %add.187 = f32[] add(f32[] %x.185, f32[] %y.186)
}

%AddComputation.222 (x.223: f32[], y.224: f32[]) -> f32[] {
  %x.223 = f32[] parameter(0)
  %y.224 = f32[] parameter(1)
  ROOT %add.225 = f32[] add(f32[] %x.223, f32[] %y.224)
}

%AddComputation.260 (x.261: f32[], y.262: f32[]) -> f32[] {
  %x.261 = f32[] parameter(0)
  %y.262 = f32[] parameter(1)
  ROOT %add.263 = f32[] add(f32[] %x.261, f32[] %y.262)
}

%AddComputation.303 (x.304: f32[], y.305: f32[]) -> f32[] {
  %x.304 = f32[] parameter(0)
  %y.305 = f32[] parameter(1)
  ROOT %add.306 = f32[] add(f32[] %x.304, f32[] %y.305)
}

%AddComputation.309 (x.310: f32[], y.311: f32[]) -> f32[] {
  %x.310 = f32[] parameter(0)
  %y.311 = f32[] parameter(1)
  ROOT %add.312 = f32[] add(f32[] %x.310, f32[] %y.311)
}

ENTRY %SyncTensorsGraph.316 (p0.1: f32[], p1.6: f32[120], p2.14: f32[120,784], p3.23: f32[32,784], p4.33: f32[84,120], p5.43: f32[84], p6.61: f32[10,84], p7.71: f32[10], p8.104: s64[32]) -> (f32[120,784], f32[120], f32[84,120], f32[84], f32[10,84], /*index=5*/f32[10], f32[32,784], s64[32], f32[32,10], f32[], /*index=10*/f32[10], f32[10,84], f32[84], f32[84,120], f32[120], /*index=15*/f32[120,784]) {
  %p2.14 = f32[120,784]{1,0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p3.23 = f32[32,784]{1,0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train.py" source_line=45}
  %custom-call.13 = f32[120,784]{1,0} custom-call(f32[120,784]{1,0} %p2.14), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.22 = f32[784,120]{0,1} transpose(f32[120,784]{1,0} %custom-call.13), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.24 = f32[32,120]{1,0} dot(f32[32,784]{1,0} %p3.23, f32[784,120]{0,1} %transpose.22), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p1.6 = f32[120]{0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.14 = f32[120]{0} custom-call(f32[120]{0} %p1.6), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.28 = f32[32,120]{1,0} broadcast(f32[120]{0} %custom-call.14), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.29 = f32[32,120]{1,0} add(f32[32,120]{1,0} %dot.24, f32[32,120]{1,0} %broadcast.28), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.30 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.31 = f32[32,120]{1,0} broadcast(f32[] %constant.30), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.32 = f32[32,120]{1,0} maximum(f32[32,120]{1,0} %add.29, f32[32,120]{1,0} %broadcast.31), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %constant.160 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.163 = f32[32,120]{1,0} broadcast(f32[] %constant.160), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.164 = pred[32,120]{1,0} compare(f32[32,120]{1,0} %maximum.32, f32[32,120]{1,0} %broadcast.163), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %p4.33 = f32[84,120]{1,0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.15 = f32[84,120]{1,0} custom-call(f32[84,120]{1,0} %p4.33), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.51 = f32[120,84]{0,1} transpose(f32[84,120]{1,0} %custom-call.15), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.52 = f32[32,84]{1,0} dot(f32[32,120]{1,0} %maximum.32, f32[120,84]{0,1} %transpose.51), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p5.43 = f32[84]{0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.16 = f32[84]{0} custom-call(f32[84]{0} %p5.43), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.56 = f32[32,84]{1,0} broadcast(f32[84]{0} %custom-call.16), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.57 = f32[32,84]{1,0} add(f32[32,84]{1,0} %dot.52, f32[32,84]{1,0} %broadcast.56), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.58 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.59 = f32[32,84]{1,0} broadcast(f32[] %constant.58), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.60 = f32[32,84]{1,0} maximum(f32[32,84]{1,0} %add.57, f32[32,84]{1,0} %broadcast.59), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %constant.153 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.156 = f32[32,84]{1,0} broadcast(f32[] %constant.153), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.157 = pred[32,84]{1,0} compare(f32[32,84]{1,0} %maximum.60, f32[32,84]{1,0} %broadcast.156), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %p8.104 = s64[32]{0} parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train.py" source_line=46}
  %broadcast.110 = s64[32,10]{1,0} broadcast(s64[32]{0} %p8.104), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %iota.1 = s64[32,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.113 = pred[32,10]{1,0} compare(s64[32,10]{1,0} %broadcast.110, s64[32,10]{1,0} %iota.1), direction=EQ, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.108 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.115 = f32[32,10]{1,0} broadcast(f32[] %constant.108), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.107 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.114 = f32[32,10]{1,0} broadcast(f32[] %constant.107), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.116 = f32[32,10]{1,0} select(pred[32,10]{1,0} %compare.113, f32[32,10]{1,0} %broadcast.115, f32[32,10]{1,0} %broadcast.114), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %negate.117 = f32[32,10]{1,0} negate(f32[32,10]{1,0} %select.116), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.120 = s64[] constant(-100), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.121 = s64[32]{0} broadcast(s64[] %constant.120), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.122 = pred[32]{0} compare(s64[32]{0} %p8.104, s64[32]{0} %broadcast.121), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.123 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.1 = f32[32]{0} broadcast(f32[] %constant.123), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.125 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.2 = f32[32]{0} broadcast(f32[] %constant.125), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.0 = f32[32]{0} select(pred[32]{0} %compare.122, f32[32]{0} %broadcast.1, f32[32]{0} %broadcast.2), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.4 = f32[32,10]{1,0} broadcast(f32[32]{0} %select.0), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.129 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %broadcast.4, f32[32,10]{1,0} %select.116), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.139 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %negate.117, f32[32,10]{1,0} %multiply.129), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.130 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %reduce.135 = f32[] reduce(f32[32,10]{1,0} %multiply.129, f32[] %constant.130), dimensions={0,1}, to_apply=%AddComputation.131, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.137 = pred[] compare(f32[] %reduce.135, f32[] %constant.130), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.136 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.138 = f32[] select(pred[] %compare.137, f32[] %reduce.135, f32[] %constant.136), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.140 = f32[32,10]{1,0} broadcast(f32[] %select.138), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %divide.141 = f32[32,10]{1,0} divide(f32[32,10]{1,0} %multiply.139, f32[32,10]{1,0} %broadcast.140), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %p6.61 = f32[10,84]{1,0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.18 = f32[10,84]{1,0} custom-call(f32[10,84]{1,0} %p6.61), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.79 = f32[84,10]{0,1} transpose(f32[10,84]{1,0} %custom-call.18), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.80 = f32[32,10]{1,0} dot(f32[32,84]{1,0} %maximum.60, f32[84,10]{0,1} %transpose.79), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p7.71 = f32[10]{0} parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.19 = f32[10]{0} custom-call(f32[10]{0} %p7.71), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.84 = f32[32,10]{1,0} broadcast(f32[10]{0} %custom-call.19), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.85 = f32[32,10]{1,0} add(f32[32,10]{1,0} %dot.80, f32[32,10]{1,0} %broadcast.84), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.86 = f32[] constant(-inf), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.91 = f32[32]{0} reduce(f32[32,10]{1,0} %add.85, f32[] %constant.86), dimensions={1}, to_apply=%MaxComputation.87, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.92 = f32[32,10]{1,0} broadcast(f32[32]{0} %reduce.91), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.93 = f32[32,10]{1,0} subtract(f32[32,10]{1,0} %add.85, f32[32,10]{1,0} %broadcast.92), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.94 = f32[32,10]{1,0} exponential(f32[32,10]{1,0} %subtract.93), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %constant.95 = f32[] constant(0), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.100 = f32[32]{0} reduce(f32[32,10]{1,0} %exponential.94, f32[] %constant.95), dimensions={1}, to_apply=%AddComputation.96, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %log.101 = f32[32]{0} log(f32[32]{0} %reduce.100), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.102 = f32[32,10]{1,0} broadcast(f32[32]{0} %log.101), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.103 = f32[32,10]{1,0} subtract(f32[32,10]{1,0} %subtract.93, f32[32,10]{1,0} %broadcast.102), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.148 = f32[32,10]{1,0} exponential(f32[32,10]{1,0} %subtract.103), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %constant.142 = f32[] constant(0), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %reduce.147 = f32[32]{0} reduce(f32[32,10]{1,0} %divide.141, f32[] %constant.142), dimensions={1}, to_apply=%AddComputation.143, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %broadcast.149 = f32[32,10]{1,0} broadcast(f32[32]{0} %reduce.147), dimensions={0}, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %multiply.150 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %exponential.148, f32[32,10]{1,0} %broadcast.149), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %subtract.151 = f32[32,10]{1,0} subtract(f32[32,10]{1,0} %divide.141, f32[32,10]{1,0} %multiply.150), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %dot.152 = f32[32,84]{1,0} dot(f32[32,10]{1,0} %subtract.151, f32[10,84]{1,0} %custom-call.18), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.154 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.155 = f32[32,84]{1,0} broadcast(f32[] %constant.154), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.158 = f32[32,84]{1,0} select(pred[32,84]{1,0} %compare.157, f32[32,84]{1,0} %dot.152, f32[32,84]{1,0} %broadcast.155), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %dot.159 = f32[32,120]{1,0} dot(f32[32,84]{1,0} %select.158, f32[84,120]{1,0} %custom-call.15), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.161 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.162 = f32[32,120]{1,0} broadcast(f32[] %constant.161), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.165 = f32[32,120]{1,0} select(pred[32,120]{1,0} %compare.164, f32[32,120]{1,0} %dot.159, f32[32,120]{1,0} %broadcast.162), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %transpose.166 = f32[784,32]{0,1} transpose(f32[32,784]{1,0} %p3.23), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot = f32[120,784]{0,1} dot(f32[32,120]{1,0} %select.165, f32[784,32]{0,1} %transpose.166), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.20 = f32[120,784]{1,0} custom-call(f32[120,784]{0,1} %dot), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.5 = f32[120,784]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.176 = f32[120,784]{1,0} multiply(f32[120,784]{1,0} %custom-call.20, f32[120,784]{1,0} %broadcast.5), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.177 = f32[120,784]{1,0} add(f32[120,784]{1,0} %p2.14, f32[120,784]{1,0} %multiply.176), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %constant.182 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.188 = f32[120]{0} reduce(f32[32,120]{1,0} %select.165, f32[] %constant.182), dimensions={0}, to_apply=%AddComputation.184, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.21 = f32[120]{0} custom-call(f32[120]{0} %reduce.188), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.181 = f32[120]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.198 = f32[120]{0} multiply(f32[120]{0} %custom-call.21, f32[120]{0} %broadcast.181), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.199 = f32[120]{0} add(f32[120]{0} %p1.6, f32[120]{0} %multiply.198), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %transpose.204 = f32[120,32]{0,1} transpose(f32[32,120]{1,0} %maximum.32), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.1 = f32[84,120]{0,1} dot(f32[32,84]{1,0} %select.158, f32[120,32]{0,1} %transpose.204), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.22 = f32[84,120]{1,0} custom-call(f32[84,120]{0,1} %dot.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.203 = f32[84,120]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.214 = f32[84,120]{1,0} multiply(f32[84,120]{1,0} %custom-call.22, f32[84,120]{1,0} %broadcast.203), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.215 = f32[84,120]{1,0} add(f32[84,120]{1,0} %p4.33, f32[84,120]{1,0} %multiply.214), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %constant.220 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.226 = f32[84]{0} reduce(f32[32,84]{1,0} %select.158, f32[] %constant.220), dimensions={0}, to_apply=%AddComputation.222, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.23 = f32[84]{0} custom-call(f32[84]{0} %reduce.226), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.219 = f32[84]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.236 = f32[84]{0} multiply(f32[84]{0} %custom-call.23, f32[84]{0} %broadcast.219), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.237 = f32[84]{0} add(f32[84]{0} %p5.43, f32[84]{0} %multiply.236), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %transpose.242 = f32[84,32]{0,1} transpose(f32[32,84]{1,0} %maximum.60), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.2 = f32[10,84]{0,1} dot(f32[32,10]{1,0} %subtract.151, f32[84,32]{0,1} %transpose.242), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.24 = f32[10,84]{1,0} custom-call(f32[10,84]{0,1} %dot.2), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.241 = f32[10,84]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.252 = f32[10,84]{1,0} multiply(f32[10,84]{1,0} %custom-call.24, f32[10,84]{1,0} %broadcast.241), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.253 = f32[10,84]{1,0} add(f32[10,84]{1,0} %p6.61, f32[10,84]{1,0} %multiply.252), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %constant.258 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.264 = f32[10]{0} reduce(f32[32,10]{1,0} %subtract.151, f32[] %constant.258), dimensions={0}, to_apply=%AddComputation.260, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.25 = f32[10]{0} custom-call(f32[10]{0} %reduce.264), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.257 = f32[10]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.274 = f32[10]{0} multiply(f32[10]{0} %custom-call.25, f32[10]{0} %broadcast.257), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.275 = f32[10]{0} add(f32[10]{0} %p7.71, f32[10]{0} %multiply.274), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.279 = s64[32,10]{1,0} broadcast(s64[32]{0} %p8.104), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %iota.3 = s64[32,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.282 = pred[32,10]{1,0} compare(s64[32,10]{1,0} %broadcast.279, s64[32,10]{1,0} %iota.3), direction=EQ, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.277 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.284 = f32[32,10]{1,0} broadcast(f32[] %constant.277), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.276 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.283 = f32[32,10]{1,0} broadcast(f32[] %constant.276), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.285 = f32[32,10]{1,0} select(pred[32,10]{1,0} %compare.282, f32[32,10]{1,0} %broadcast.284, f32[32,10]{1,0} %broadcast.283), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.288 = f32[32,10]{1,0} broadcast(f32[] %constant.277), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.289 = pred[32,10]{1,0} compare(f32[32,10]{1,0} %select.285, f32[32,10]{1,0} %broadcast.288), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.290 = f32[32,10]{1,0} broadcast(f32[] %constant.276), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %negate.286 = f32[32,10]{1,0} negate(f32[32,10]{1,0} %select.285), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.287 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %negate.286, f32[32,10]{1,0} %subtract.103), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.291 = f32[32,10]{1,0} select(pred[32,10]{1,0} %compare.289, f32[32,10]{1,0} %broadcast.290, f32[32,10]{1,0} %multiply.287), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.292 = s64[] constant(-100), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.293 = s64[32]{0} broadcast(s64[] %constant.292), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.294 = pred[32]{0} compare(s64[32]{0} %p8.104, s64[32]{0} %broadcast.293), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.295 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.6 = f32[32]{0} broadcast(f32[] %constant.295), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.297 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.7 = f32[32]{0} broadcast(f32[] %constant.297), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.1 = f32[32]{0} select(pred[32]{0} %compare.294, f32[32]{0} %broadcast.6, f32[32]{0} %broadcast.7), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.8 = f32[32,10]{1,0} broadcast(f32[32]{0} %select.1), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.301 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %broadcast.8, f32[32,10]{1,0} %select.285), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.308 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %select.291, f32[32,10]{1,0} %multiply.301), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.313 = f32[] reduce(f32[32,10]{1,0} %multiply.308, f32[] %constant.276), dimensions={0,1}, to_apply=%AddComputation.309, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.302 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.307 = f32[] reduce(f32[32,10]{1,0} %multiply.301, f32[] %constant.302), dimensions={0,1}, to_apply=%AddComputation.303, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %divide.314 = f32[] divide(f32[] %reduce.313, f32[] %reduce.307), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  ROOT %tuple.315 = (f32[120,784]{1,0}, f32[120]{0}, f32[84,120]{1,0}, f32[84]{0}, f32[10,84]{1,0}, /*index=5*/f32[10]{0}, f32[32,784]{1,0}, s64[32]{0}, f32[32,10]{1,0}, f32[], /*index=10*/f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=15*/f32[120,784]{1,0}) tuple(f32[120,784]{1,0} %add.177, f32[120]{0} %add.199, f32[84,120]{1,0} %add.215, f32[84]{0} %add.237, f32[10,84]{1,0} %add.253, /*index=5*/f32[10]{0} %add.275, f32[32,784]{1,0} %p3.23, s64[32]{0} %p8.104, f32[32,10]{1,0} %subtract.103, f32[] %divide.314, /*index=10*/f32[10]{0} %custom-call.25, f32[10,84]{1,0} %custom-call.24, f32[84]{0} %custom-call.23, f32[84,120]{1,0} %custom-call.22, f32[120]{0} %custom-call.21, /*index=15*/f32[120,784]{1,0} %custom-call.20), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8,output9,output10,output11,output12,output13,output14,output15"}
}

`
export default text;
